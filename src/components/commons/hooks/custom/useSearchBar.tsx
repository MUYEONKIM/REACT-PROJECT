import _ from 'lodash'
import type { IQuery, IQueryFetchBoardsArgs, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";
import type { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { useState } from 'react';

type RefetchBoards = (
  variables?: Partial<IQueryFetchBoardsArgs> | undefined
) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;

type RefetchUseditems = (
  variables?: Partial<IQueryFetchUseditemsArgs> | undefined
) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;

interface ISearchUIProps {
  refetch: RefetchBoards | RefetchUseditems;
  count? : number;

  refetchBoardsCount?: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
}

export default function useSearchBar(props: ISearchUIProps) {
  const [ keyword, setKeyword ] = useState("");
  
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({search: value, page:1})
    if (props.refetchBoardsCount) {
      void props.refetchBoardsCount({search: value})
    }
    setKeyword(value)
  }, 500);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value)
  };

  return {keyword, onChangeSearch}
}