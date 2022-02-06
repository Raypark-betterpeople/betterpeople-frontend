import { gql, useMutation, useQuery, useReactiveVar } from "@apollo/client";
import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import { CommonBodyContainer, Font } from "../common/styled";
import { useMe } from "../hooks/useMe";
import {
  createProvideImage,
  createProvideImageVariables,
} from "../__generated__/createProvideImage";
import { donate, donateVariables } from "../__generated__/donate";
import { LoginHeader } from "./login-header";
import { LogoutHeader } from "./logout-header";

const DONATE_QUERY = gql`
  query donate($input: DonateInput!) {
    donate(input: $input) {
      ok
      error
      donate {
        id
        title
        description
        coverImg
        durationTime
        descriptionImg
        donateImage {
          imageUrl
        }
      }
    }
  }
`;

const CREATE_PROVIDING_IMAGE_MUTATION = gql`
  mutation createProvideImage($input: CreateProvideImageInput!) {
    createProvideImage(input: $input) {
      ok
      error
    }
  }
`;

const DonateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 8rem;
  margin-bottom: 10rem;
`;

const CoverImg = styled.div`
  width: 100%;
  height: 500px;
  background-color: rgb(200, 200, 200);
  margin-bottom: 5rem;
`;

const DonateIllust = styled.div`
  width: 300px;
  height: 300px;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  margin: 1rem 0;
`;

const IllustContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 520px) {
    justify-content: center;
  }
`;

const DescriptionImg = styled.div`
  width: 100%;
  background-size: cover;
  height: 1300px;
`;

const PaymentButton = styled.span`
  cursor: pointer;
  padding: 1rem;
  background-color: dodgerblue;
  color: white;
  border-radius: 10px;
`;

export const SelectDonate = () => {
  const { data: UserData } = useMe();
  const params = useParams() as { id: string };
  const { data } = useQuery<donate, donateVariables>(DONATE_QUERY, {
    variables: {
      input: {
        donateId: +params.id,
      },
    },
  });

  const donateName = data?.donate.donate?.title;
  const description = data?.donate.donate?.description;
  const coverImageUrl = data?.donate.donate?.coverImg;
  const durationTime = data?.donate.donate?.durationTime;
  const descriptionImg = data?.donate.donate?.descriptionImg;
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const onCompleted = (data:createProvideImage) => {
    if(data.createProvideImage.ok) {
      alert('구매가 완료되었습니다! 👀')
    }
  }
  const [createProvideImage, { loading }] = useMutation<
    createProvideImage,
    createProvideImageVariables
  >(CREATE_PROVIDING_IMAGE_MUTATION, {onCompleted});
  const triggerPaddle = () => {
    if (UserData?.me.email) {
      //@ts-ignore
      window.Paddle.Setup({ vendor: 140501 });
      //@ts-ignore
      window.Paddle.Checkout.open({
        product: 754163,
        email: UserData?.me.email,
        successCallback: (paddleData:any) => {
          createProvideImage({
            variables: {
              input: {
                transactionId: paddleData.checkout.id,
                donateId: +params.id
              }
            }
          })
        }
      });
    }
  };
  return (
    <CommonBodyContainer>
      <Helmet>
        <title>{`더 좋은 사람들 | ${donateName}`}</title>
        <script src="https://cdn.paddle.com/paddle/paddle.js"></script>
      </Helmet>
      {isLoggedIn ? <LoginHeader /> : <LogoutHeader />}
      <DonateBox key={data?.donate.donate?.id}>
        <CoverImg
          style={{
            backgroundImage: `url('${coverImageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Font
          fontColor="black"
          fontWeight="600"
          fontSize="2rem"
          marginBottom="1rem"
        >
          {donateName}
        </Font>
        <Font
          fontSize="1.2rem"
          fontWeight="600"
          fontColor="rgb(80,80,80)"
          marginBottom="5rem"
        >
          진행 기간 : {durationTime}
        </Font>
        <Font
          style={{ lineHeight: "2rem", letterSpacing: "1px" }}
          fontSize="1.5rem"
          fontWeight="400"
          fontColor="rgb(80,80,80)"
        >
          {description}
        </Font>
      </DonateBox>
      <DescriptionImg style={{ backgroundImage: `url('${descriptionImg}')` }} />
      <Font fontSize="2rem" fontWeight="500" fontColor="black">
        등록되어 있는 일러스트에오!
      </Font>
      <IllustContainer>
        {data?.donate.donate?.donateImage?.map((imageArray) => {
          return (
            <DonateIllust
              key={imageArray.imageUrl}
              style={{ backgroundImage: `url('${imageArray.imageUrl}')` }}
            />
          );
        })}
      </IllustContainer>
      <PaymentButton onClick={triggerPaddle}>일러스트 구매</PaymentButton>
    </CommonBodyContainer>
  );
};
