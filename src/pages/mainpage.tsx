import { useReactiveVar } from "@apollo/client";
import React from "react";
import { Helmet } from "react-helmet";
import { isLoggedInVar } from "../apollo";
import { DogCatInfo } from "../sections/dogcat-info";
import { LoginHeader } from "./login-header";
import { LogoutHeader } from "./logout-header";
import {Intro} from '../sections/Intro'
import { EarthInfo } from "../sections/earth-info";
import { EmailWarning } from "../components/confirm-email-warning";
import { CommonBodyContainer } from "../common/styled";
import { InstaSection } from "../sections/InstaSection";
import { IllustAbout } from "../sections/illust-about-section";
import { DonateSession } from "../sections/donate-session";

export const MainPage = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <CommonBodyContainer>
      <EmailWarning />
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
      <EarthInfo />
      <IllustAbout />
      <InstaSection />
      <DonateSession />
    </CommonBodyContainer>
  );
};
