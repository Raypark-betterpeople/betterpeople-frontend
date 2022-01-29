import { gql, useQuery } from "@apollo/client";
import { meQuery } from "../__generated__/meQuery";

export const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      nickname
      emailVerified
      adminUser
    }
  }
`;

export const useMe = () => {
    return useQuery<meQuery>(ME_QUERY);
}