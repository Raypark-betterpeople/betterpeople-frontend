import { useReactiveVar } from "@apollo/client";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import { DogCatInfo } from "../components/dogcat-info";
import { LoginHeader } from "../pages/login-header";
import { LogoutHeader } from "../pages/logout-header";
import {Intro} from '../components/Intro'

const MainPageContainer = styled.div`
  position: relative;
  display: flex;
  padding: 0 18% 0 18%;
  flex-direction: column;
  @media only screen and (max-width: 520px) {
    padding: 0 5% 0 5%;
  }
`

export const MainPage = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <MainPageContainer>
      <Helmet>
        <title>더 좋은 사람들</title>
      </Helmet>
      {isLoggedIn ? (
        <LoginHeader />
      ) : (
        <LogoutHeader />
      )}
      <Intro />
      <DogCatInfo />
    </MainPageContainer>
  );
};
