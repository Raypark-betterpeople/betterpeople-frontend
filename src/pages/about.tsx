import { useReactiveVar } from "@apollo/client";
import React from "react";
import { isLoggedInVar } from "../apollo";
import { CommonBodyContainer, Font } from "../common/styled";
import { LoginHeader } from "./login-header";
import { LogoutHeader } from "./logout-header";

export const AboutPage = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <CommonBodyContainer>
      {isLoggedIn ? <LoginHeader /> : <LogoutHeader />}
      <Font fontSize='2rem' fontWeight='700' fontColor='black'>착한 일 한거는 숨기는게 미덕? 🤔</Font>
      <Font fontSize='1.3rem' fontWeight='600' fontColor='black'>뎃츠 노노! 우린 공유해오!</Font>
    </CommonBodyContainer>
  );
};
