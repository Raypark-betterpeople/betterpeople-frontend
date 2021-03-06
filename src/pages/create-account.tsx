import { gql, useMutation } from "@apollo/client";
import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FormError } from "../components/form-error";
import AroundLogo from "../images/ahnlogo.png";
import {
  createAccountMutation,
  createAccountMutationVariables,
} from "../__generated__/createAccountMutation";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccountMutation($createAccountInput: CreateAccountInput!) {
    createAccount(input: $createAccountInput) {
      ok
      error
    }
  }
`;

interface ICreateAccountForm {
  email: string;
  password: string;
  nickname: string;
  passwordcheck: string;
}

const Section = styled.div`
  width: 100vw;
  display: flex;
  padding: 5rem 0 5rem 0;
  justify-content: center;
  @media only screen and (max-width: 520px) {
    padding: 2rem 0 2rem 0;
  }
`;

const InlineStyle = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  margin-bottom: 1rem;
  @media only screen and (max-width: 520px) {
    margin-bottom: 0;
  }
`;

const AROUND_LOGO = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 5px;
  @media only screen and (max-width: 520px) {
    width: 40px;
    height: 40px;
  }
`;

const Input = styled.input`
  all: unset;
  padding: 1rem;
  border-radius: 7px;
  border: 1px solid rgb(200, 200, 200);
  margin-top: 0.5rem;
  width: 100%;
  color: rgb(80, 80, 80);
  :hover {
    border: 1px solid rgb(95, 75, 139);
  }

  :focus {
    border: 1px solid rgb(95, 75, 139);
    background-color: rgba(95, 75, 139, 0.1);
  }
  @media only screen and (max-width: 520px) {
    margin-top: 0.4rem;
    font-size: 12px;
    padding: 0.8rem;
  }
`;

const Font = styled.p<{
  fontSize: string;
  fontColor: string;
  marginTop?: string;
  fontWeight?: string;
}>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  margin-top: ${(props) => props.marginTop};
  font-weight: ${(props) => props.fontWeight};
  @media only screen and (max-width: 520px) {
    font-size: 12px;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 30%;
  @media only screen and (max-width: 1200px) {
    width: 50%;
  }
  @media only screen and (max-width: 900px) {
    width: 70%;
  }
  @media only screen and (max-width: 520px) {
    width: 90%;
  }
`;

const Button = styled.button<{ opacity?: string; canClick?: string }>`
  all: unset;
  background-color: rgb(95, 75, 139);
  color: white;
  padding: 1rem 1.5rem 1rem 1.5rem;
  border-radius: 5px;
  transition: 0.5s;
  font-weight: 500;
  cursor: pointer;
  pointer-events: ${(props) => props.canClick};
  opacity: ${(props) => props.opacity};
  :hover {
    opacity: 0.7;
  }
  @media only screen and (max-width: 520px) {
    padding: 0.8rem 1rem 0.8rem 1rem;
    font-size: 14px;
  }
`;

const Seperate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
`;

export const CreateAccount = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ICreateAccountForm>({
    mode: "onChange",
  });
  const navigate = useNavigate();
  const onCompleted = (data: createAccountMutation) => {
    const {createAccount: { ok }} = data;
    if(ok) {
      navigate('/login')
    }
  }
  const [createAccountMutation, { data }] = useMutation<
    createAccountMutation,
    createAccountMutationVariables
  >(CREATE_ACCOUNT_MUTATION, {onCompleted});
  const onSubmit = () => {
    const { email, password, nickname } = getValues();
    createAccountMutation({
      variables: {
        createAccountInput: {
          email,
          password,
          nickname,
        },
      },
    });
  };
  return (
    <Section>
      <Helmet>
        <title>??? ?????? ????????? | ????????????</title>
      </Helmet>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Link style={{ textDecoration: "none" }} to="/">
          <InlineStyle>
            <AROUND_LOGO src={AroundLogo} alt="??????" />
          </InlineStyle>
        </Link>
        <Font
          fontSize="22px"
          fontColor="rgb(80,80,80)"
          fontWeight="600"
          marginTop="0.5rem"
        >
          ??? ?????? ????????? ????????? ???????????????!
        </Font>
        <Font fontSize="16px" fontColor="rgb(80,80,80)" marginTop="2rem">
          ????????? ??????
        </Font>
        <Input
          style={{ boxSizing: "border-box" }}
          {...register("email", {
            required: "???????????? ?????? ???????????????.",
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          type="email"
          required
        />
        {errors.email?.message && (
          <FormError errorMessage={errors.email?.message} />
        )}
        {errors.email?.type === "pattern" && (
          <FormError errorMessage="????????? ????????? ???????????? ????????????." />
        )}
        <Font fontSize="16px" fontColor="rgb(80,80,80)" marginTop="2rem">
          ?????????
        </Font>
        <Input
          style={{ boxSizing: "border-box" }}
          {...register("nickname", { required: "???????????? ?????? ???????????????." })}
          type="text"
          required
        />
        {errors.nickname?.message && (
          <FormError errorMessage={errors.nickname?.message} />
        )}
        <Font fontSize="16px" fontColor="rgb(80,80,80)" marginTop="2rem">
          ????????????
        </Font>
        <Input
          style={{ boxSizing: "border-box" }}
          {...register("password", {
            required: "??????????????? ?????? ???????????????.",
            minLength: 10,
          })}
          type="password"
          required
        />
        {errors.password?.message && (
          <FormError errorMessage={errors.password?.message} />
        )}
        {errors.password?.type === "minLength" && (
          <FormError errorMessage="??????????????? 10?????? ??????????????? ?????????." />
        )}
        <Font fontSize="16px" fontColor="rgb(80,80,80)" marginTop="2rem">
          ???????????? ??????
        </Font>
        <Input
          style={{ boxSizing: "border-box" }}
          {...register("passwordcheck", {
            required: "??????????????? ???????????? ????????????.",
            minLength: 10,
            validate: (value) => value === getValues("password"),
          })}
          type="password"
          required
        />
        {errors.passwordcheck?.type === "validate" && (
          <FormError errorMessage="??????????????? ???????????? ????????????." />
        )}
        <Seperate>
          <div>
            <Font fontSize="16px" fontColor="rgb(80,80,80)">
              ?????? ??? ?????? ???????????? ???????????????????
            </Font>

            <Link
              style={{ textDecoration: "none", display: "inline-block" }}
              to="/login"
            >
              <Font
                fontSize="16px"
                fontColor="rgb(95, 75, 139)"
                marginTop="0.3rem"
              >
                ?????????
              </Font>
            </Link>
          </div>
          {isValid ? (
            <Button>????????????</Button>
          ) : (
            <Button canClick="none" opacity="0.5">
              ????????????
            </Button>
          )}
        </Seperate>
        {data?.createAccount.error && <FormError errorMessage={data?.createAccount.error} />}
      </Form>
    </Section>
  );
};
