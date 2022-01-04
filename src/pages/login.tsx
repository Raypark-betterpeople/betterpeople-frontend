import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AroundLogo from "../images/around_logo.png";

const Section = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
`;

const InlineStyle = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  margin-bottom: 1rem;
`;

const AROUND_LOGO = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 5px;
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
    border: 1px solid rgb(36,179,139);
  }

  :focus {
    border: 1px solid rgb(36,179,139);
    background-color: rgba(91, 202, 147, 0.1);
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
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 30%;
`;

const Button = styled.button`
  all: unset;
  background-color: rgb(36,179,139);
  color: white;
  padding: 1rem 1.5rem 1rem 1.5rem;
  border-radius: 5px;
  transition: 0.5s;
  font-weight: 500;
  cursor: pointer;
  :hover {
    opacity: 0.7;
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
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const onSubmit = () => {
    console.log(watch("email"));
  };
  return (
    <Section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Link style={{ textDecoration: "none" }} to="/">
          <InlineStyle>
            <AROUND_LOGO src={AroundLogo} alt="로고" />
            <Font
              fontSize="26px"
              fontColor="rgb(36,179,139)"
              fontWeight="700"
            >
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
          {...register("email", { required: true })}
          type="email"
        />
        <Font fontSize="16px" fontColor="rgb(80,80,80)" marginTop="3rem">
          비밀번호
        </Font>
        <Input
          style={{ boxSizing: "border-box" }}
          {...register("password", { required: true })}
          type="password"
        />
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
      </Form>
    </Section>
  );
};
