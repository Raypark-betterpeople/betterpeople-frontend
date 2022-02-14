/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: meQuery
// ====================================================

export interface meQuery_me_provideImage {
  __typename: "ProvideImage";
  token: string;
  imageUrl: string;
  donateSessionTitle: string;
  donateDurationDate: string;
}

export interface meQuery_me {
  __typename: "User";
  id: number;
  email: string;
  nickname: string;
  emailVerified: boolean;
  adminUser: boolean;
  provideImage: meQuery_me_provideImage[] | null;
}

export interface meQuery {
  me: meQuery_me;
}
