import { gql, useQuery, useReactiveVar } from "@apollo/client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { isLoggedInVar } from "../apollo";
import { CommonBodyContainer } from "../common/styled";
import { UseVerifyIllust } from "../hooks/getVerifyIllust";
import {
  searchVerifyImage,
  searchVerifyImageVariables,
} from "../__generated__/searchVerifyImage";
import { LoginHeader } from "./login-header";
import { LogoutHeader } from "./logout-header";


export const VerifyIllust = () => {
  const [token, setToken] = useState('');
  const {data} = UseVerifyIllust(token);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const onSubmit = () => {
    const { token } = getValues();
    setToken(token)
  }

    
    

  return (
    <CommonBodyContainer>
      {isLoggedIn ? <LoginHeader /> : <LogoutHeader />}
      <div>verify page</div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ boxSizing: "border-box" }}
          {...register("token", {
            required: "토큰을 입력해주세요!",
          })}
          type="text"
          required
        />
        </form>
        {data?.searchVerifyImage.verifyImage?.donateSessionTitle}
        {data?.searchVerifyImage.verifyImage?.providingUser.nickname}
    </CommonBodyContainer>
  );
};
