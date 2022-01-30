import { gql, useQuery, useReactiveVar } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import { CommonBodyContainer, Font } from "../common/styled";
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
        donateImage {
          imageUrl
        }
      }
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
  height: 300px;
  background-color: rgb(200, 200, 200);
  margin-bottom: 1rem;
`;

export const SelectDonate = () => {
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
  const durationTime = data?.donate.donate?.durationTime
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <CommonBodyContainer>
      {isLoggedIn ? <LoginHeader /> : <LogoutHeader />}
      <DonateBox key={data?.donate.donate?.id}>
        <CoverImg>{coverImageUrl}</CoverImg>
        <Font
          fontColor="black"
          fontWeight="600"
          fontSize="2rem"
          marginBottom="0.8rem"
        >
          {donateName}
        </Font>
        <Font fontSize="1.2rem" fontWeight="400" fontColor="rgb(80,80,80)">
          {durationTime}
        </Font>
        <Font fontSize="1rem" fontWeight="400" fontColor="rgb(80,80,80)">
          {description}
        </Font>
      </DonateBox>
    </CommonBodyContainer>
  );
};
