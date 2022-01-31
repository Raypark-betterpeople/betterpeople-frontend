/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allNoticeQuery
// ====================================================

export interface allNoticeQuery_allNotice_notices {
  __typename: "Notice";
  id: number;
  createAt: any;
  mainTitle: string;
  subTitle: string;
  description: string;
  image: string;
}

export interface allNoticeQuery_allNotice {
  __typename: "AllNoticeOutput";
  notices: allNoticeQuery_allNotice_notices[] | null;
}

export interface allNoticeQuery {
  allNotice: allNoticeQuery_allNotice;
}
