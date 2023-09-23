import { gql, useQuery } from "@apollo/client"
// import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_USER = gql`
  query fetchUserLoggedIn {
    fetchUserLoggenIn {
      id
      email
      name
    }
  }
`

export const useQueryFetchUser = () => {
  const query = useQuery(FETCH_USER);

  return query
}