/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_Login {
  __typename: "LoginOutput";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface LoginMutation {
  Login: LoginMutation_Login;
}

export interface LoginMutationVariables {
  loginInput: LoginInput;
}
