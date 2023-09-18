import { getDate } from "../../../../commons/libraries/utils";
import Paginations01 from "../../../commons/pagnation/pagnation.contatiner";
import SearchBar from "../../../commons/search/search.container";
import * as S from "./Boardlist.style";
import type { IBoardlistUIProps } from "./Boardlist.types";

export default function BoardListUI(props: IBoardlistUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <SearchBar 
        refetch={props.refetch}
        refetchBoardsCount = {props.refetchBoardsCount}
        onChangeKeyword = {props.onChangeKeyword}
      />
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Paginations01 refetch={props.refetch} count={props.count}/>
        <S.Button onClick={props.onClickMoveToBoarWrite}>
          <S.PencilIcon src="/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}