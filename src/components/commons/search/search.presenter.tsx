import {
  FireFilledIcon,
  Searchbar,
  SearchbarInput,
} from "./search.styles";
import type { ISearchUIProps } from "./search.types";

export default function SearchUI(props: ISearchUIProps): JSX.Element {
  return (
    <Searchbar>
      <FireFilledIcon />
      <SearchbarInput
        onChange = {props.onChangeKeyword}
        placeholder="검색어를 입력해 주세요."
      />
    </Searchbar>
  );
}