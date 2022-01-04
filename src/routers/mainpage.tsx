import { useReactiveVar } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";

export const MainPage = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <div>
      {isLoggedIn ? (
        "로그인"
      ) : (
        <div>
          <Link className='text-link' to="/login">로그인</Link>
          <Link className='text-link' to="/create-account">회원가입</Link>
        </div>
      )}
    </div>
  );
};
