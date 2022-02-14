/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NoticeInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: notice
// ====================================================

export interface notice_notice_notice {
  __typename: "Notice";
  id: number;
  createAt: any;
  description: string;
  image: string;
  mainTitle: string;
  subTitle: string;
}

export interface notice_notice {
  __typename: "NoticeOutput";
  ok: boolean;
  error: string | null;
  notice: notice_notice_notice | null;
}

export interface notice {
  notice: notice_notice;
}

export interface noticeVariables {
  input: NoticeInput;
}
