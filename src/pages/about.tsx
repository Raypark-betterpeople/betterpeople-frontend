import { useReactiveVar } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import { CommonBodyContainer, Font } from "../common/styled";
import { LoginHeader } from "./login-header";
import { LogoutHeader } from "./logout-header";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0 5rem 0;
`;

export const AboutPage = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <CommonBodyContainer>
      {isLoggedIn ? <LoginHeader /> : <LogoutHeader />}
      <AboutContainer>
        <Font fontSize="2rem" fontWeight="700" fontColor="rgb(90, 41, 194)">
          착한 일 한거는 숨기는게 미덕?
        </Font>
        <Font
          fontSize="1.3rem"
          fontWeight="600"
          fontColor="rgb(90, 41, 194)"
          marginBottom="1.5rem"
        >
          뎃츠 노노! 우린 공유해오!
        </Font>
        <Font fontSize="1.1rem" fontWeight="600" fontColor="black" marginBottom='1rem'>
          이제는 우리의 가치소비를 드러낼 때! 힙하게 선한 영향력 행사하고 힙한
          일러스트도 받고, 사람들에게 자랑해봐요!
        </Font>
        <Font fontSize="1rem" fontWeight="400" fontColor="rgb(80,80,80)">
          우리팀은 여러분이 착한 일에 참여하면 힙하고 귀여운 '일러스트'를
          제공합니다 👋🏻
        </Font>
        <Font fontSize="1rem" fontWeight="400" fontColor="rgb(80,80,80)" marginBottom='1rem'>
          이 일러스트에는 여러분의 닉네임과 어떤 좋은 일에 참여했는지 등에 대한
          정보가 나와있어요!
        </Font>
        <Font fontSize="1rem" fontWeight="400" fontColor="rgb(80,80,80)">
          제공하는 메인 일러스트는 힙한 픽셀아트!
        </Font>

      </AboutContainer>
    </CommonBodyContainer>
  );
};
