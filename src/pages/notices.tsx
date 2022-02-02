import { useReactiveVar } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import { CommonBodyContainer, Font } from "../common/styled";
import { useNotice } from "../hooks/allNotice";
import { Loading } from "./loading";
import { LoginHeader } from "./login-header";
import { LogoutHeader } from "./logout-header";

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
`;

const NoticeContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const CoverImage = styled.div`
    background-color: rgb(220,220,220);
    width: 300px;
    height: 150px;
    margin-bottom: 1rem;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`

export const Notices = () => {
  const { data } = useNotice();
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <CommonBodyContainer>
      {isLoggedIn ? <LoginHeader /> : <LogoutHeader />}
      <ContentsContainer>
        <Font fontColor="black" fontSize="2rem" fontWeight="600">
          더좋사 공지사항이에오 🎉
        </Font>
        {data ? <NoticeContainer>
          {data?.allNotice.notices?.map((selectNotice) => {
            return (
              <NoticeBox key={selectNotice.id}>
                <CoverImage style={{backgroundImage:`url('${selectNotice.image}')`}}/>
                <Font fontSize='1.2rem' fontWeight='600' fontColor='black' marginBottom='0.3rem'>{selectNotice.mainTitle}</Font>
                <Font fontSize='0.9rem' fontWeight='500' fontColor='rgb(80,80,80)'>{new Date(selectNotice.createAt).toLocaleString("ko")}</Font>
              </NoticeBox>
            );
          })}
        </NoticeContainer> : <Loading />}
        
      </ContentsContainer>
    </CommonBodyContainer>
  );
};
