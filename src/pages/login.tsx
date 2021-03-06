import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FormError } from "../components/form-error";
import Helmet from "react-helmet";
import AroundLogo from "../images/ahnlogo.png";
import {
  LoginMutation,
  LoginMutationVariables,
} from "../__generated__/LoginMutation";
import { authToken, isLoggedInVar } from "../apollo";
import { LOCALSTORAGE_TOKEN } from "../constant";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($loginInput: LoginInput!) {
    Login(input: $loginInput) {
      ok
      error
      token
    }
  }
`;

const Section = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 520px) {
    height: 100vh;
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

const Button = styled.button<{ opacity?: string, canClick?: string }>`
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

interface IForm {
  email: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IForm>({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onCompleted = (data: LoginMutation) => {
    const {
      Login: { ok, error, token },
    } = data;
    if (ok && token) {
      localStorage.setItem(LOCALSTORAGE_TOKEN, token)
      isLoggedInVar(true);
      authToken(token);
      navigate('/')
    }
    if (error) {
      console.log(error);
    }
  };
  const [loginMutation, { data }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN_MUTATION, { onCompleted });
  const onSubmit = () => {
    const { email, password } = getValues();
    loginMutation({
      variables: {
        loginInput: {
          email,
          password,
        },
      },
    });
  };
  return (
    <Section>
      <Helmet>
        <title>??? ?????? ????????? | ?????????</title>
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
          ??? ?????? ????????? ????????? ??????????????????.
        </Font>
        <Font fontSize="16px" fontColor="rgb(80,80,80)" marginTop="3rem">
          ????????? ??????
        </Font>
        <Input
          style={{ boxSizing: "border-box" }}
          {...register("email", { required: "???????????? ?????? ???????????????.", pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
          type="email"
          required
        />
        {errors.email?.message && (
          <FormError errorMessage={errors.email?.message} />
        )}
        {errors.email?.type ==='pattern' && (
          <FormError errorMessage="????????? ????????? ???????????? ????????????." />
        )}
        <Font fontSize="16px" fontColor="rgb(80,80,80)" marginTop="3rem">
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
        <Seperate>
          <div>
            <Font fontSize="16px" fontColor="rgb(80,80,80)">
              ?????? ??? ?????? ???????????? ????????? ????????????????
            </Font>

            <Link
              style={{ textDecoration: "none", display: "inline-block" }}
              to="/create-account"
            >
              <Font
                fontSize="16px"
                fontColor="rgb(95, 75, 139)"
                marginTop="0.3rem"
              >
                ????????????
              </Font>
            </Link>
          </div>
          {isValid ? <Button>?????????</Button> : <Button canClick='none' opacity='0.5'>?????????</Button>}
        </Seperate>
        {data?.Login.error && <FormError errorMessage={data?.Login.error} />}
      </Form>
    </Section>
  );
};
