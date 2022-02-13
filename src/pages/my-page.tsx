import React from "react";
import styled from "styled-components";
import { CommonBodyContainer, Font } from "../common/styled";
import { useMe } from "../hooks/useMe";
import { LoginHeader } from "./login-header";

const IllustContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5rem;
`;

const IllustBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 320px;
  padding: 1rem;
  border-radius: 10px;
  border:1px solid rgb(230,230,230);
  margin-right: 2rem;
  margin-bottom: 2rem;
  box-shadow: 4px 8px 12px rgb(180,180,180);
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 10px;
`;

const TokenCheck = styled.span`
  cursor: pointer;
  :hover {
    color:rgba(133, 100, 206);
    text-decoration: underline;
  }
`

export const MyPage = () => {
  const { data: UserData } = useMe();
  return (
    <CommonBodyContainer>
      <LoginHeader />
      <Font
        fontColor="black"
        fontWeight="700"
        fontSize="1.7rem"
        marginBottom="1rem"
        style={{ marginTop: "5rem" }}
      >
        {UserData?.me.nickname}님 이 만큼이나 참여하셨네요?! 🎉
      </Font>
      <Font
        fontSize="1rem"
        fontWeight="500"
        fontColor="rgb(120,120,120)"
        marginBottom="0.1rem"
      >
        그 동안 모인 일러스트들 입니다.
      </Font>
      <Font
        fontSize="1rem"
        fontWeight="500"
        fontColor="rgb(120,120,120)"
        marginBottom="0.3rem"
      >
        {UserData?.me.nickname}님의 따듯한 마음 응원합니다.
      </Font>
      <IllustContainer style={{ marginTop: "3rem" }}>
        {UserData?.me.provideImage?.map((images, index) => {
          return (
            <IllustBox key={index}>
              <Image src={images.imageUrl} alt="illust" />
              <Font
                fontSize="1.5rem"
                fontWeight="600"
                fontColor="black"
                marginBottom="0.5rem"
              >
                {UserData.me.nickname} 님
              </Font>
              <Font
                fontSize="0.9rem"
                fontWeight="400"
                fontColor="rgb(80,80,80)"
                marginBottom="0.3rem"
              >
                '{images.donateDurationDate}'에 진행된
              </Font>
              <Font
                fontSize="0.9rem"
                fontWeight="400"
                fontColor="rgb(80,80,80)"
                marginBottom="1rem"
              >
                '{images.donateSessionTitle}'에 참여.
              </Font>
              <Font
                fontColor="black"
                fontSize="1rem"
                fontWeight="600"
                marginBottom='0.3rem'
                style={{ marginLeft: "auto"}}
              >
                <TokenCheck>
                토큰 일련번호 확인
                </TokenCheck>
              </Font>
              <Font
                fontColor="rgb(120,120,120)"
                fontSize="0.8rem"
                fontWeight="600"
                style={{ marginLeft: "auto" }}
              >
                better-people.org
              </Font>
            </IllustBox>
          );
        })}
      </IllustContainer>
    </CommonBodyContainer>
  );
};
