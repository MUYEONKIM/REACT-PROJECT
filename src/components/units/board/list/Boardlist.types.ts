import type { ApolloQueryResult, OperationVariables } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types"
import type { MouseEvent } from "react";

export interface IBoardlistUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToBoarWrite?: () => void;
  onClickMoveToBoardDetail?: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count? : number;
  refetchBoardsCount: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  keyword?: string;
  onChangeKeyword: (value: string) => void; 
}