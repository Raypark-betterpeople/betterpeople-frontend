import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FormError } from "../components/form-error";
import AroundLogo from "../images/around_logo.png";
import {
  LoginMutation,
  LoginMutationVariables,
} from "../__generated__/LoginMutation";

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
  width: 60px;
  height: 60px;
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
    border: 1px solid rgb(36, 179, 139);
  }

  :focus {
    border: 1px solid rgb(36, 179, 139);
    background-color: rgba(91, 202, 147, 0.1);
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

const Button = styled.button`
  all: unset;
  background-color: rgb(36, 179, 139);
  color: white;
  padding: 1rem 1.5rem 1rem 1.5rem;
  border-radius: 5px;
  transition: 0.5s;
  font-weight: 500;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  @media only screen and (max-width: 520px) {
    padding: 0.8rem 1rem 0.8rem 1rem;
    font-size:14px;
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
    formState: { errors },
  } = useForm<IForm>({
    mode: "onChange"
  });
  const onCompleted = (data: LoginMutation) => {
    const {
      Login: { ok, error, token },
    } = data;
    if (ok) {
      console.log(token)
    }
    if(error) {
      console.log(error)
    }
  };
  const [loginMutation, {data}] = useMutation<LoginMutation, LoginMutationVariables>(
    LOGIN_MUTATION,
    { onCompleted }
  );
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Link style={{ textDecoration: "none" }} to="/">
          <InlineStyle>
            <AROUND_LOGO src={AroundLogo} alt="로고" />
            <Font fontSize="26px" fontColor="rgb(36,179,139)" fontWeight="700">
              BetterPeople Inc.
            </Font>
          </InlineStyle>
        </Link>
        <Font
          fontSize="22px"
          fontColor="rgb(80,80,80)"
          fontWeight="600"
          marginTop="2rem"
        >
          더 좋은 사람들 계정에 로그인합니다.
        </Font>
        <Font fontSize="16px" fontColor="rgb(80,80,80)" marginTop="3rem">
          이메일 주소
        </Font>
        <Input
          style={{ boxSizing: "border-box" }}
          {...register("email", { required: "이메일은 필수 항목입니다." })}
          type="email"
          required
        />
        {errors.email?.message && (
          <FormError errorMessage={errors.email?.message} />
        )}
        <Font fontSize="16px" fontColor="rgb(80,80,80)" marginTop="3rem">
          비밀번호
        </Font>
        <Input
          style={{ boxSizing: "border-box" }}
          {...register("password", {
            required: "비밀번호는 필수 항목입니다.",
            minLength: 10,
          })}
          type="password"
          required
        />
        {errors.password?.message && (
          <FormError errorMessage={errors.password?.message} />
        )}
        {errors.password?.type === "minLength" && (
          <FormError errorMessage="비밀번호는 8글자 이상이어야 합니다." />
        )}
        <Seperate>
          <div>
            <Font fontSize="16px" fontColor="rgb(80,80,80)">
              아직 더 좋은 사람들의 회원이 아니신가요?
            </Font>

            <Link
              style={{ textDecoration: "none", display: "inline-block" }}
              to="/create-account"
            >
              <Font
                fontSize="16px"
                fontColor="rgb(36,179,139)"
                marginTop="0.3rem"
              >
                회원가입
              </Font>
            </Link>
          </div>
          <Button>로그인</Button>
        </Seperate>
        {data?.Login.error && (
          <FormError errorMessage={data?.Login.error} />
        )}
      </Form>
    </Section>
  );
};
