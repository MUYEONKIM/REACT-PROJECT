import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export const FetchBoards = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      createdAt
    }
  }
` 
export const useQueryFetchBoards = () => {
  const query = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FetchBoards
  );

  return query;
};
