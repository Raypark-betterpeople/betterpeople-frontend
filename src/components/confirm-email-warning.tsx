import React from "react";
import styled, { keyframes } from "styled-components";
import { useMe } from "../hooks/useMe";
import { Loading } from "../pages/loading";

const FalseContainer = styled.div`
  border-radius: 15px;
  background-color: rgba(255, 0, 0, 0.4);
  color: white;
  font-weight: 600;
  padding: 1.3rem;
  position: fixed;
  z-index: 300;
  bottom: 1rem;
  right: 1rem;
  line-height: 1.5rem;
  margin-left: 1rem;
`;

const FadeContainer = keyframes`
  0% {
    transform: translateY(150%);
  }
  30% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(150%);
  }
`;

const TrueContainer = styled.div`
  border-radius: 15px;
  background-color: rgba(50, 189, 159, 0.4);
  color: white;

  font-weight: 600;
  padding: 1.3rem;
  position: fixed;
  z-index: 3000;
  bottom: 1rem;
  right: 1rem;
  line-height: 1.5rem;
  margin-left: 1rem;
  transform: translateY(150%);
  animation: ${FadeContainer} 5s;
  @media only screen and (max-width: 520px) {
    font-size: 0.9rem;
  }
`;

export const EmailWarning = () => {
  const { data, loading } = useMe();
  if (loading) {
    return <Loading />;
  }

  if (!data?.me) {
    return <></>;
  }
  return (
    <div>
      {data?.me.emailVerified ? (
        <TrueContainer>
          이메일 인증이 완료된 계정입니다 👍🏻 이제 모든 기능을 이용해보세요!
        </TrueContainer>
      ) : (
        <FalseContainer>
          아직 이메일 본인인증이 되지 않았습니다. <br /> 가입한 이메일의 메일함을
          확인해주세요 👏🏻
        </FalseContainer>
      )}
    </div>
  );
};
