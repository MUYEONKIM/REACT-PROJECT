import { gql, useQuery } from "@apollo/client";

export const FETCH_LOGIN = gql`
  query fetchUserLoggedIn{
    fetchUserLoggedIn{
      _id
      name
      email
    }
  }
`

export const useQuerynfetchUserLoggedIn = () => {
  const query = useQuery(FETCH_LOGIN);

  return query
}