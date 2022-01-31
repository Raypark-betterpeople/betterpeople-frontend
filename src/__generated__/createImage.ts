/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateImageInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createImage
// ====================================================

export interface createImage_createImage {
  __typename: "CreateImageOutput";
  ok: boolean;
  error: string | null;
}

export interface createImage {
  createImage: createImage_createImage;
}

export interface createImageVariables {
  createImageInput: CreateImageInput;
}
