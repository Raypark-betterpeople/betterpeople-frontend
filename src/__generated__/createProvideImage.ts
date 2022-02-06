/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateProvideImageInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createProvideImage
// ====================================================

export interface createProvideImage_createProvideImage {
  __typename: "CreateProvideImageOutput";
  ok: boolean;
  error: string | null;
}

export interface createProvideImage {
  createProvideImage: createProvideImage_createProvideImage;
}

export interface createProvideImageVariables {
  input: CreateProvideImageInput;
}
