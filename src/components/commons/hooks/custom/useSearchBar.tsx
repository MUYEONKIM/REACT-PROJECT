import _ from 'lodash'
import type { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";
import type { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { useState } from 'react';

interface ISearchUIProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count? : number;

  refetchBoardsCount: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}

export default function useSearchBar(props: ISearchUIProps) {
  const [ keyword, setKeyword ] = useState("");
  
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({search: value, page:1})
    void props.refetchBoardsCount({search: value})
    setKeyword(value)
  }, 500);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value)
  };

  return {keyword, onChangeSearch}
}