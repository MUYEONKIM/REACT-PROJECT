import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_POINT = gql`
  query fetchPointTransactions {
    fetchPointTransactions {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
      updatedAt
    }
  }
`;
export default function useQueryFetchPointTransactions() {
  const query = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT);

  return query;
}
