/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allDonateQuery
// ====================================================

export interface allDonateQuery_allDonate_donates_donateImage {
  __typename: "ImageContainer";
  imageUrl: string;
}

export interface allDonateQuery_allDonate_donates {
  __typename: "DonateSession";
  id: number;
  title: string;
  description: string;
  coverImg: string;
  durationTime: string;
  donateImage: allDonateQuery_allDonate_donates_donateImage[] | null;
}

export interface allDonateQuery_allDonate {
  __typename: "AllDonateOutput";
  donates: allDonateQuery_allDonate_donates[] | null;
}

export interface allDonateQuery {
  allDonate: allDonateQuery_allDonate;
}
