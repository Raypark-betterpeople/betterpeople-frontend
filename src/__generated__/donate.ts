/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DonateInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: donate
// ====================================================

export interface donate_donate_donate_donateImage {
  __typename: "ImageContainer";
  imageUrl: string;
}

export interface donate_donate_donate {
  __typename: "DonateSession";
  id: number;
  title: string;
  description: string;
  coverImg: string;
  durationTime: string;
  donateImage: donate_donate_donate_donateImage[] | null;
}

export interface donate_donate {
  __typename: "DonateOutput";
  ok: boolean;
  error: string | null;
  donate: donate_donate_donate | null;
}

export interface donate {
  donate: donate_donate;
}

export interface donateVariables {
  input: DonateInput;
}
