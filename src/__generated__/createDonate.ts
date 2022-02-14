/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateDonateInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createDonate
// ====================================================

export interface createDonate_createDonate {
  __typename: "CreateDonateOutput";
  ok: boolean;
  error: string | null;
}

export interface createDonate {
  createDonate: createDonate_createDonate;
}

export interface createDonateVariables {
  createDonateInput: CreateDonateInput;
}
