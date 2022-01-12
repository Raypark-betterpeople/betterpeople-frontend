import React, { useEffect, useState } from "react";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import {
  verifyEmail,
  verifyEmailVariables,
} from "../__generated__/verifyEmail";
import { Loading } from "./loading";
import { DirectionStyle } from "../common/styled";
import { useMe } from "../hooks/useMe";
import { useNavigate } from "react-router-dom";

const VERIFY_EMAIL_MUTATION = gql`
  mutation verifyEmail($input: VerifyEmailInput!) {
    verifyEmail(input: $input) {
      ok
      error
    }
  }
`;

export const ConfirmEmail = () => {
  const { data: userData } = useMe();
  const client = useApolloClient();
  const navigate = useNavigate();
  const [userId, setUserId] = useState<number>(0);

  console.log(userId);

  

  const onCompleted = (data: verifyEmail) => {
    const {
      verifyEmail: { ok, error },
    } = data;
    if (ok && userData?.me.id) {
      client.writeFragment({
        id: `User:${userData.me.id}`,
        fragment: gql`
          fragment MyUser on User {
            emailVerified
          }
        `,
        data: {
          __typename: "User",
          emailVerified: true,
        },
      });
      navigate("/");
    }
    if (error) {
      return <div>에러입니다.</div>;
    }
  };
  useEffect(() => {
    if (userData?.me.id) {
      setUserId(userData?.me.id);
    }
    const [_, code] = window.location.href.split("code=");
    const Mutation = () => {
      verifyEmail({
        variables: {
          input: {
            code,
          },
        },
      });
    };
    setTimeout(Mutation, 500)
  }, []);

  const [verifyEmail] = useMutation<verifyEmail, verifyEmailVariables>(
    VERIFY_EMAIL_MUTATION,
    {
      onCompleted,
    }
  );

  return (
    <div>
      <DirectionStyle directionStyle="column">
        <Loading />
      </DirectionStyle>
    </div>
  );
};
