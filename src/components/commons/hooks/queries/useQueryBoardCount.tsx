import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsCountArgs } from "../../../../commons/types/generated/types";

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`

export const useQueryBoardCount = () => {
  const query = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(
    FETCH_BOARDS_COUNT);
  
  return query;
  };