import { gql, useQuery } from "@apollo/client";

export interface IFetchUser {
  fetchUserLoggedIn: {
    name: string;
    picture: string;
  };
}

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
  const query = useQuery<IFetchUser>(FETCH_USER);

  return query;
};
