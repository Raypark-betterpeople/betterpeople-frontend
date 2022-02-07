import { gql, useQuery, useReactiveVar } from "@apollo/client";
import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { CommonBodyContainer } from "../common/styled";
import { useMe } from "../hooks/useMe";
import { notice, noticeVariables } from "../__generated__/notice";
import { LoginHeader } from "./login-header";
import { LogoutHeader } from "./logout-header";

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
      <div>{data?.notice.notice?.mainTitle}</div>
      <div>{new Date(data?.notice.notice?.createAt).toLocaleString('ko')}</div>
      <div>{data?.notice.notice?.subTitle}</div>
      <div>{data?.notice.notice?.description}</div>
    </CommonBodyContainer>
  );
};
