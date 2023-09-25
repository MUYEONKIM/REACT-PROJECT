import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export const FETCH_BOARDS_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      createdAt
      likeCount
      images
    }
  }
` 
export const useQueryFetchBoardsOfTheBest = () => {
  const query = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS_BEST
  );

  return query;
};
