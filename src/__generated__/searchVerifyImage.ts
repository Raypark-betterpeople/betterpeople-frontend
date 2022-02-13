/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VerifyImageSearchInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: searchVerifyImage
// ====================================================

export interface searchVerifyImage_searchVerifyImage_verifyImage_providingUser {
  __typename: "User";
  nickname: string;
}

export interface searchVerifyImage_searchVerifyImage_verifyImage {
  __typename: "ProvideImage";
  id: number;
  imageUrl: string;
  token: string;
  donateSessionTitle: string;
  donateDurationDate: string;
  providingUser: searchVerifyImage_searchVerifyImage_verifyImage_providingUser;
}

export interface searchVerifyImage_searchVerifyImage {
  __typename: "VerifyImageSearchOutput";
  ok: boolean;
  error: string | null;
  verifyImage: searchVerifyImage_searchVerifyImage_verifyImage | null;
}

export interface searchVerifyImage {
  searchVerifyImage: searchVerifyImage_searchVerifyImage;
}

export interface searchVerifyImageVariables {
  input: VerifyImageSearchInput;
}
