import React from "react";
import styled from "styled-components";
import { useMe } from "../hooks/useMe";

const Container = styled.div`
    border-radius: 15px;
    background-color: rgba(255,0,0,0.4);
    color: white;
    font-weight: 600;
    padding: 1.3rem;
    position: fixed;
    z-index:300;
    bottom: 1rem;
    right: 1rem;
    line-height: 1.5rem;
    margin-left: 1rem;
`

export const EmailWarning = () => {
  const { data } = useMe();
  return (
      <div>
          {data?.me.emailVerified ? "" : <Container>아직 이메일 본인인증이 되지 않았습니다. 가입한 이메일의 메일함을 확인해주세요 👏🏻</Container>}
      </div>
  )
};
