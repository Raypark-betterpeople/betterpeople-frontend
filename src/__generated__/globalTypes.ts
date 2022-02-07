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
  descriptionImg: string;
  durationTime: string;
}

export interface CreateImageInput {
  imageUrl: string;
  donateId: number;
}

export interface CreateNoticeInput {
  mainTitle: string;
  subTitle: string;
  description: string;
  image: string;
}

export interface CreateProvideImageInput {
  donateId: number;
  transactionId: string;
}

export interface DonateInput {
  donateId: number;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface NoticeInput {
  noticeId: number;
}

export interface VerifyEmailInput {
  code: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
