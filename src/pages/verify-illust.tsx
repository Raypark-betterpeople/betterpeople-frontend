import { useReactiveVar } from "@apollo/client";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { HiBadgeCheck } from "react-icons/hi";
import styled, { keyframes } from "styled-components";
import { isLoggedInVar } from "../apollo";
import { CommonBodyContainer, Font } from "../common/styled";
import { FormError } from "../components/form-error";
import { UseVerifyIllust } from "../hooks/getVerifyIllust";
import "../css/LoadingSpinner.css";
import { LoginHeader } from "./login-header";
import { LogoutHeader } from "./logout-header";

const LoadingSpinner = keyframes`
  0% {
    opacity: 1
  }
  90% {
    opacity: 1
  }
  100% {
    opacity:0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  justify-content: center;
  align-items: center;
`;

const InputToken = styled.input`
  all: unset;
  border: 1px solid rgb(200, 200, 200);
  padding: 1.2rem;
  width: 60%;
  border-radius: 5px;
  letter-spacing: 1.2px;
  font-size: 0.9rem;
  margin-top: 0.3rem;
  :focus {
    border: 1px solid rgb(120, 120, 120);
  }
  @media only screen and (max-width: 520px) {
    width: 100%;
  }
`;

const IllustContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 10rem;
`;

const Illust = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  box-shadow: 4px 8px 12px rgb(200, 200, 200);
  padding: 1rem;
  @media only screen and (max-width: 520px) {
    width: 280px;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  @media only screen and (max-width: 520px) {
    width: 100%;
  }
`;

const Icon = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  text-align: center;
  vertical-align: center;
  transform: translateY(6px);
  margin-right: 0.2rem;
`;

const EmptyIllust = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55vh;
`;

const LoadingAnimation = styled.div`
  display: flex;
  position: absolute;
  top: -15px;
  width: 100%;
  height: 110%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${LoadingSpinner} 2.2s;
  animation-fill-mode: forwards;
  z-index: 10;
  background-color: white;
  @media only screen and (max-width: 520px) {
    width: 110%;
  }
`;

const CheckLoading = styled.div`
  display: flex;
  position: absolute;
  top: -15px;
  width: 100%;
  height: 110%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: white;
  animation: ${LoadingSpinner} 2s;
  animation-fill-mode: forwards;
  @media only screen and (max-width: 520px) {
    width: 110%;
  }
`

interface IForm {
  token: string;
}
export const VerifyIllust = () => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const { data } = UseVerifyIllust(token);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: "onChange",
  });
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const onSubmit = () => {
    const { token } = getValues();
    setToken(token);
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1800)
    if(window.innerWidth > 1200) {
      window.scrollTo(0,220)
    }
    if(window.innerWidth < 500) {
      window.scrollTo(0,300)
    }
    if(window.innerWidth < 400) {
      window.scrollTo(0,360)
    }
  };

  return (
    <CommonBodyContainer>
      <Helmet>
        <title>더 좋은 사람들 | 일러스트 인증</title>
      </Helmet>
      {isLoggedIn ? <LoginHeader /> : <LogoutHeader />}
      <TextBox>
        <Font fontColor="black" fontSize="1.5rem" fontWeight="700" smallDeviceSize='1.2rem'>
          일러스트의 토큰 번호를 입력해주세요!
        </Font>
        <Font fontColor="rgb(100,100,100)" fontSize="1rem" fontWeight="400" smallDeviceSize='0.8rem'>
          번호를 입력하면 정품 인증이 된 일러스트를 확인할 수 있습니다.
        </Font>
      </TextBox>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Font fontColor="black" fontSize="1rem" fontWeight="400">
          정품 일련토큰을 입력해주세요!
        </Font>
        <InputToken
          autoComplete="off"
          spellCheck="false"
          placeholder="verify token"
          style={{ boxSizing: "border-box" }}
          {...register("token", {
            required: "토큰을 입력해주세요!",
          })}
          type="text"
          required
        />
        {errors.token?.message && (
          <FormError errorMessage={errors.token.message} />
        )}
      </Form>
      {data?.searchVerifyImage.verifyImage?.providingUser.nickname !==
      undefined ? (
        <IllustContainer>
          {loading ? (
              <LoadingAnimation>
                <div className="lds-ripple">
                  <div></div>
                  <div></div>
                </div>
                <Font fontSize="0.9rem" fontWeight="400" fontColor="black">
                  토큰 인증 중입니다. 잠시만 기다려주세요.
                </Font>
              </LoadingAnimation>
          ) : (
            <CheckLoading>
              <div className="wrapper">
                <svg
                  className="checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    className="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    className="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
                <Font
                  style={{marginTop:'1rem'}}
                  fontColor="black"
                  fontWeight="600"
                  fontSize="1rem"
                >
                  인증 완료!
                </Font>
              </div>
            </CheckLoading>
          )}

          <Illust>
            <Font
              fontColor="rgb(60,60,60)"
              fontSize="0.9rem"
              fontWeight="600"
              style={{ marginRight: "auto", letterSpacing: "0.8px" }}
            >
              <Icon>
                <HiBadgeCheck color="rgb(129, 78, 240)" />
              </Icon>
              인증된 일러스트
            </Font>
            <Image
              src={data?.searchVerifyImage.verifyImage?.imageUrl}
              alt="일러스트 이미지"
            />
            <Font
              fontWeight="600"
              fontSize="1.5rem"
              fontColor="rgb(80,80,80)"
              marginBottom="1rem"
            >
              {data?.searchVerifyImage.verifyImage?.providingUser.nickname} 님
            </Font>
            <Font
              fontWeight="400"
              fontSize="1rem"
              fontColor="black"
              lineHeight="1.2rem"
            >
              {data?.searchVerifyImage.verifyImage?.donateDurationDate}에
              진행된,
            </Font>
            <Font fontWeight="400" fontSize="1rem" fontColor="black">
              {data?.searchVerifyImage.verifyImage?.donateSessionTitle}에 참여.
            </Font>
            <Font
              fontWeight="400"
              fontSize="0.8rem"
              fontColor="rgb(80,80,80)"
              marginBottom='0.3rem'
              style={{ marginLeft: "auto" }}
            >
              더 좋은 사람들
            </Font>
            <Font
              fontWeight="400"
              fontSize="0.8rem"
              fontColor="rgb(80,80,80)"
              style={{ marginLeft: "auto" }}
            >
              Social Chaining Inc.
            </Font>
          </Illust>
        </IllustContainer>
      ) : (
        <EmptyIllust>
          <Font fontColor="black" fontSize="1.5rme" fontWeight="700">
            토큰을 작성하시면 일러스트가 나옵니다 👨🏻‍💻{" "}
          </Font>
        </EmptyIllust>
      )}
    </CommonBodyContainer>
  );
};
