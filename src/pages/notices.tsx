import { useReactiveVar } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
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
  @media only screen and (max-width: 900px) {
    justify-content: center;
  }
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
        <Font fontColor="black" fontSize="2rem" fontWeight="600" marginBottom='0.8rem' smallDeviceSize='1.5rem'>
          더좋사의 최근 공지사항입니다. 👍🏻
        </Font>
        <Font fontColor="rgb(80,80,80)" fontSize="1rem" fontWeight="500" smallDeviceSize='0.8rem'>
          어떤 기부 프로젝트가 진행되는지, 어떻게 모금 금액이 쓰이고 있는지 확인해보세요!
        </Font>
        {data ? <NoticeContainer>
          {data?.allNotice.notices?.map((selectNotice) => {
            return (
              <>
              <Link to={`/notice/${selectNotice.id}`}>
              <NoticeBox key={selectNotice.id}>
                <CoverImage style={{backgroundImage:`url('${selectNotice.image}')`}}/>
                <Font fontSize='1.2rem' fontWeight='600' fontColor='black' marginBottom='0.3rem'>{selectNotice.mainTitle}</Font>
                <Font fontSize='0.9rem' fontWeight='500' fontColor='rgb(80,80,80)'>{new Date(selectNotice.createAt).toLocaleString("ko")}</Font>
              </NoticeBox>
              </Link>
              </>
            );
          })}
        </NoticeContainer> : <Loading />}
        
      </ContentsContainer>
    </CommonBodyContainer>
  );
};
