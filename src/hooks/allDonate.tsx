import { gql, useQuery } from "@apollo/client";
import { allDonateQuery } from "../__generated__/allDonateQuery";

export const DONATE_QUERY = gql`
  query allDonateQuery {
    allDonate {
      donates {
        id
        title
        description
        coverImg
        durationTime
        publicStatus
        donateImage {
          imageUrl
        }
      }
    }
  }
`;

export const useDonate = () => {
    return useQuery<allDonateQuery>(DONATE_QUERY);
}
