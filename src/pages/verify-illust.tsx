import { useReactiveVar } from "@apollo/client";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { HiBadgeCheck } from "react-icons/hi";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import { CommonBodyContainer, Font } from "../common/styled";
import { FormError } from "../components/form-error";
import { UseVerifyIllust } from "../hooks/getVerifyIllust";
import { LoginHeader } from "./login-header";
import { LogoutHeader } from "./logout-header";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

const InputToken = styled.input`
  all: unset;
  border: 1px solid rgb(200,200,200);
  padding: 1.2rem;
  width: 60%;
  border-radius: 5px;
  letter-spacing: 1.2px;
  font-size: 0.9rem;
  :focus {
    border: 1px solid rgb(120,120,120);
  }
`;

const IllustContainer = styled.div`
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
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
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
`

interface IForm {
  token: string;
}
export const VerifyIllust = () => {
  const [token, setToken] = useState("");
  const { data } = UseVerifyIllust(token);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IForm>({
    mode: "onChange",
  });
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const onSubmit = () => {
    const { token } = getValues();
    setToken(token);
  };

  return (
    <CommonBodyContainer>
      <Helmet>
        <title>??? ?????? ????????? | ???????????? ??????</title>
      </Helmet>
      {isLoggedIn ? <LoginHeader /> : <LogoutHeader />}
      <TextBox>
        <Font fontColor="black" fontSize="1.5rem" fontWeight="700">
          ??????????????? ?????? ????????? ??????????????????!
        </Font>
        <Font fontColor="rgb(100,100,100)" fontSize="1rem" fontWeight="400">
          ????????? ???????????? ?????? ????????? ??? ??????????????? ????????? ??? ????????????.
        </Font>
      </TextBox>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputToken
          style={{ boxSizing: "border-box" }}
          {...register("token", {
            required: "????????? ??????????????????!",
          })}
          type="text"
          required
        />
        {errors.token?.message && (
          <FormError errorMessage={errors.token.message} />
        )}
      </Form>
      {data?.searchVerifyImage.verifyImage?.providingUser.nickname !== undefined ? (
        <IllustContainer>
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
              ????????? ????????????
            </Font>
            <Image
              src={data?.searchVerifyImage.verifyImage?.imageUrl}
              alt="???????????? ?????????"
            />
            <Font
              fontWeight="600"
              fontSize="1.5rem"
              fontColor="rgb(80,80,80)"
              marginBottom="1rem"
            >
              {data?.searchVerifyImage.verifyImage?.providingUser.nickname} ???
            </Font>
            <Font
              fontWeight="400"
              fontSize="1rem"
              fontColor="black"
              lineHeight="1.2rem"
            >
              {data?.searchVerifyImage.verifyImage?.donateDurationDate}???
              ?????????,
            </Font>
            <Font fontWeight="400" fontSize="1rem" fontColor="black">
              {data?.searchVerifyImage.verifyImage?.donateSessionTitle}??? ??????.
            </Font>
            <Font
              fontWeight="400"
              fontSize="0.9rem"
              fontColor="rgb(80,80,80)"
              style={{ marginLeft: "auto" }}
            >
              Better people Inc.
            </Font>
          </Illust>
        </IllustContainer>
      ) : (
        <EmptyIllust>
          <Font fontColor='black' fontSize='1.5rme' fontWeight='700'>????????? ??????????????? ??????????????? ???????????? ??????????????? </Font>
        </EmptyIllust>
      )}
    </CommonBodyContainer>
  );
};
