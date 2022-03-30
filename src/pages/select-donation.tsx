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
import { Loading } from "./loading";
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
  margin-bottom: 1rem;
  white-space: pre-wrap;
`;

const CoverImg = styled.img`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 15px;
  @media only screen and (max-width: 520px) {
    margin-bottom: 1rem;
  }
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
  margin-top: 1rem;
  @media only screen and (max-width: 520px) {
    justify-content: center;
  }
`;

const DescriptionImg = styled.img`
  width: 100%;
  margin-right: auto;
  margin-bottom: 3rem;
  margin-top: 5rem;
`;

const PaymentContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-top: 10rem;
  margin-bottom: 10rem;
  box-shadow: 4px 8px 12px rgb(200, 200, 200);
  border-radius: 15px;
  @media only screen and (max-width: 520px) {
    flex-direction: column;
    box-shadow: none;
    border: 1px solid rgb(220,220,220);
  }
`;

const DurationLabel = styled.div`
  display: inline-block;
  padding: 0.5rem;
  background-color: #949494;
  border-radius: 5px;
  color: white;
`

const PaymentAbout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 75%;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  @media only screen and (max-width: 520px) {
    width: 100%;
    align-items: flex-start;
  }
`;

const Line = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid rgb(220, 220, 220);
  margin: 1.3rem 0 1.3rem 0;
`;

const PaymentPrice = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 35%;
  background-color: rgba(133, 100, 206, 0.3);
  border-radius: 0 15px 15px 0;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  @media only screen and (max-width: 520px) {
    width: 100%;
    border-radius: 0 0 15px 15px;
  }
`;

const PaymentButton = styled.span`
  margin-top: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  border-radius: 5px;
  color: white;
  background-color: rgb(80, 80, 80);
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
  }
  @media only screen and (max-width: 520px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }
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
  const onCompleted = (data: createProvideImage) => {
    if (data.createProvideImage.ok) {
      alert("구매가 완료되었습니다! 👀");
    }
  };
  const [createProvideImage, { loading }] = useMutation<
    createProvideImage,
    createProvideImageVariables
  >(CREATE_PROVIDING_IMAGE_MUTATION, { onCompleted });
  const triggerPaddle = () => {
    if (UserData?.me.email) {
      //@ts-ignore
      window.Paddle.Setup({ vendor: 140501 });
      //@ts-ignore
      window.Paddle.Checkout.open({
        product: 754163,
        email: UserData?.me.email,
        successCallback: (paddleData: any) => {
          createProvideImage({
            variables: {
              input: {
                transactionId: paddleData.checkout.id,
                donateId: +params.id,
              },
            },
          });
        },
      });
    }
  };
  return (
    <CommonBodyContainer>
      {coverImageUrl && descriptionImg ? '' : <Loading />}
      <Helmet>
        <title>{`더 좋은 사람들 | ${donateName}`}</title>
        <script src="https://cdn.paddle.com/paddle/paddle.js"></script>
      </Helmet>
      {isLoggedIn ? <LoginHeader /> : <LogoutHeader />}
      <DonateBox key={data?.donate.donate?.id}>
      <Font
            fontColor="black"
            fontWeight="600"
            fontSize="1rem"
            smallDeviceSize='0.8rem'
            marginBottom='0.5rem'
            style={{marginRight:'auto'}}
          >
            <DurationLabel>
            🕙 진행기간 : {durationTime} 까지
            </DurationLabel>
          </Font>
        <CoverImg src={coverImageUrl} alt="일러스트 이미지" />
        <Font
          fontColor="black"
          fontWeight="700"
          fontSize="2rem"
          marginBottom="3rem"
          smallDeviceSize='1.1rem'
        >
          {donateName}
        </Font>
      </DonateBox>
      <DescriptionImg src={descriptionImg} />
      <Font fontSize="2rem" fontWeight="700" fontColor="black" smallDeviceSize='1.2rem'>
        이 일러스트를 얻을 수 있어요!
      </Font>
      <Font fontSize="1rem" fontWeight="500" fontColor="rgb(100,100,100)" smallDeviceSize='0.8rem'>
        (랜덤으로 1장이 발급됩니다.)
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
      <PaymentContainer>
        <PaymentAbout>
          <Font
            fontSize="1.5rem"
            fontWeight="700"
            fontColor="black"
            marginBottom="1rem"
            smallDeviceSize='1rem'
          >
            {UserData?.me.nickname}님 이 기부세션에 참여하고 싶으신가요?
          </Font>
          <Font fontSize="1rem" fontWeight="400" fontColor="rgb(100,100,100)" smallDeviceSize='0.7rem' smallDeviceLineHeight='1rem'>
            당신의 마음이 이 곳에 움직인다면 망설이지 말고,
          </Font>
          <Font
            fontSize="1rem"
            fontWeight="400"
            fontColor="rgb(100,100,100)"
            marginBottom="1.5rem"
            smallDeviceSize='0.7rem'
          >
            여러분의 인증할 수 있는 일러스트를 얻어보세요!
          </Font>
          <Font
            fontSize="1.2rem"
            fontWeight="700"
            fontColor="rgba(133, 100, 206)"
            smallDeviceSize='0.7rem'
          >
            " 당신의 마음이 이 세상을 따듯하게 만듭니다 👏🏻 "
          </Font>
          <Line />
          <Font
            fontSize="1rem"
            fontWeight="700"
            fontColor="rgb(133,100,206)"
            marginBottom="1rem"
          >
            Notification
          </Font>
          <Font
            fontSize="0.9rem"
            fontWeight="400"
            fontColor="rgb(150,150,150)"
            lineHeight="1.5rem"
            smallDeviceSize='0.7rem'
            smallDeviceLineHeight='1rem'
          >
            1. 일러스트는 등록된 일러스트 중 랜덤으로 1장이 발급됩니다. 
          </Font>
          <Font
            fontSize="0.9rem"
            fontWeight="400"
            fontColor="rgb(150,150,150)"
            lineHeight="1.5rem"
            smallDeviceSize='0.7rem'
            smallDeviceLineHeight='1rem'
          >
            2. 발급된 일러스트는 정품 인증에서 페이지에서 발급되면서 포함되는 토큰을
            이용해 할 수 있습니다. 
          </Font>
          <Font
            fontSize="0.9rem"
            fontWeight="400"
            fontColor="rgb(150,150,150)"
            lineHeight="1.5rem"
            smallDeviceSize='0.7rem'
            smallDeviceLineHeight='1rem'
          >
            3. 일러스트 가격의 50%는 해당 기부 세션에 기부됩니다. (VAT이 제외된 금액)
          </Font>
          <Font
            fontSize="0.9rem"
            fontWeight="400"
            fontColor="rgb(150,150,150)"
            lineHeight="1.5rem"
            smallDeviceSize='0.7rem'
            smallDeviceLineHeight='1rem'
          >
            4. 해당 기부 모금 기간이 종료된 시점에서 정산된 금액을 기부합니다. 관련 정보는 공지사항에 업로드됩니다.
          </Font>
        </PaymentAbout>
        <PaymentPrice>
          <Font
            fontSize="1rem"
            fontWeight="600"
            fontColor="black"
            marginBottom="1.5rem"
            smallDeviceSize='0.8rem'
          >
            구매하고, 인증하고, 자랑하자!
          </Font>
          <Font
            fontSize="2.5rem"
            fontWeight="700"
            fontColor="rgba(133, 100, 206)"
            smallDeviceSize='1.5rem'
          >
            2,900 원
          </Font>
          <PaymentButton onClick={triggerPaddle}>일러스트 구매</PaymentButton>
        </PaymentPrice>
      </PaymentContainer>
    </CommonBodyContainer>
  );
};
