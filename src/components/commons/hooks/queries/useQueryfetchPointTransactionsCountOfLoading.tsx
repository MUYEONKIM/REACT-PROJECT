import { gql, useQuery } from "@apollo/client";

export const FETCH_POINT = gql`
  query fetchPointTransactions{
    fetchPointTransactions
  }
`
export default function useQueryFetchPointTransactions() {
  const query = useQuery(FETCH_POINT);

  return query
}