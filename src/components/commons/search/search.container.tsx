import SearchUI from "./search.presenter";
import _ from 'lodash'
import type { IBoardlistUIProps } from "../../units/board/list/Boardlist.types";

export default function SearchBar(props: IBoardlistUIProps): JSX.Element {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({search: value, page:1})
    void props.refetchBoardsCount({search: value})
    props.onChangeKeyword(value);
  }, 500);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value)
  };

  return (
    <SearchUI 
      onChangeKeyword = {onChangeSearch}
    />
  )
}