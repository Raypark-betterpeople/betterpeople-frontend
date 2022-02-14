import { gql, useQuery } from "@apollo/client";
import {
  searchVerifyImage,
  searchVerifyImageVariables,
} from "../__generated__/searchVerifyImage";

export const VERIFY_ILLUST_QUERY = gql`
  query searchVerifyImage($input: VerifyImageSearchInput!) {
    searchVerifyImage(input: $input) {
      ok
      error
      verifyImage {
        id
        imageUrl
        token
        donateSessionTitle
        donateDurationDate
        providingUser {
          nickname
        }
      }
    }
  }
`;

export const UseVerifyIllust = (token: string) => {
  return useQuery<searchVerifyImage, searchVerifyImageVariables>(
    VERIFY_ILLUST_QUERY,
    {
      variables: {
        input: {
          token,
        },
      },
    }
  );
};
