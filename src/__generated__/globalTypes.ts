/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateAccountInput {
  nickname: string;
  email: string;
  password: string;
  profileImg?: string | null;
}

export interface CreateDonateInput {
  title: string;
  description: string;
  coverImg: string;
  durationTime: string;
}

export interface CreateImageInput {
  imageUrl: string;
  donateId: number;
}

export interface DonateInput {
  donateId: number;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface VerifyEmailInput {
  code: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
