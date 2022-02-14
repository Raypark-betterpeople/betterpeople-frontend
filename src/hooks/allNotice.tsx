import { gql, useQuery } from "@apollo/client";
import { allNoticeQuery } from "../__generated__/allNoticeQuery";

export const NOTICE_QUERY = gql`
  query allNoticeQuery {
    allNotice {
      notices {
        id
        createAt
        mainTitle
        subTitle
        description
        image
      }
    }
  }
`;

export const useNotice = () => {
  return useQuery<allNoticeQuery>(NOTICE_QUERY);
};
