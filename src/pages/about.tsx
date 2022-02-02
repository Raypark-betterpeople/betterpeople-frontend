import { useReactiveVar } from "@apollo/client";
import React from "react";
import { isLoggedInVar } from "../apollo";
import { CommonBodyContainer } from "../common/styled";
import { LoginHeader } from "./login-header";
import { LogoutHeader } from "./logout-header";

export const AboutPage = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <CommonBodyContainer>
      {isLoggedIn ? <LoginHeader /> : <LogoutHeader />}소개페이지
    </CommonBodyContainer>
  );
};
