import { gql, useQuery, useReactiveVar } from "@apollo/client";
import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import { CommonBodyContainer, Font } from "../common/styled";
import { useMe } from "../hooks/useMe";
import { notice, noticeVariables } from "../__generated__/notice";
import { LoginHeader } from "./login-header";
import { LogoutHeader } from "./logout-header";

const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`

const NoticeBody = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  white-space: pre-wrap;
`

const Image = styled.img`
  background-color: gray;
  width: 100%;
  height: 500px;
  margin-bottom: 2rem;
  @media only screen and (max-width: 520px) {
    height: 100%;
  }
`

const NOTICE_QUERY = gql`
  query notice($input: NoticeInput!) {
    notice(input: $input) {
      ok
      error
      notice {
        id
        createAt
        description
        image
        mainTitle
        subTitle
      }
    }
  }
`;

export const SelectNotice = () => {
  const { data: UserData } = useMe();
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const params = useParams() as { id: string };
  const { data } = useQuery<notice, noticeVariables>(NOTICE_QUERY, {
    variables: {
      input: {
        noticeId: +params.id,
      },
    },
  });
  return (
    <CommonBodyContainer>
      <Helmet>
        <title>{`더 좋은 사람들 | ${data?.notice.notice?.mainTitle}`}</title>
      </Helmet>
      {isLoggedIn ? <LoginHeader /> : <LogoutHeader />}
      <NoticeBox>
      <Font fontWeight='700' fontColor='black' fontSize='1.8rem'>{data?.notice.notice?.mainTitle}</Font>
      <Font fontWeight='400' fontColor='rgb(80,80,80)' fontSize='1rem'>{new Date(data?.notice.notice?.createAt).toLocaleString('ko')}</Font>
      <NoticeBody>
        <Image src={data?.notice.notice?.image} alt='공지사항 이미지'/>
        <Font fontWeight='700' fontColor='black' fontSize='1.5rem' marginBottom='1rem'>{data?.notice.notice?.subTitle}</Font>
        <Font fontWeight='400' fontColor='black' fontSize='1rem'>{data?.notice.notice?.description}</Font>
      </NoticeBody>
      </NoticeBox>
    </CommonBodyContainer>
  );
};
