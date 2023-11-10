import { gql, useQuery } from "@apollo/client";
// import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_USER = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        _id
        amount
      }
      createdAt
    }
  }
`;

export const useQueryFetchUser = () => {
  const query = useQuery(FETCH_USER);

  return query;
};
