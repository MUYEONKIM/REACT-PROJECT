import { Card } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import { useMoveToPage } from "../../../commons/hooks/custom/useMovetoPage";
import useSearchBar from "../../../commons/hooks/custom/useSearchBar";
import { useQueryBoardCount } from "../../../commons/hooks/queries/useQueryBoardCount";
import SearchBar from "../../../commons/search/search.index";
import * as S from "./Goodslist.style";
import {v4 as uuidv4} from "uuid"
import { useQueryFetchUseditems } from "../../../commons/hooks/queries/useQueryFetchUsedItems";
import { useQueryFetchUseditemsOfTheBest } from "../../../commons/hooks/queries/useQueryFetchUseditemsOfTheBest";
const SECRET = "!@#"

export default function GoodsList(): JSX.Element {
  const { data } = useQueryFetchUseditems();
  const { data: dataBest } = useQueryFetchUseditemsOfTheBest();
  // const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQueryBoardCount();
  // const { keyword, onChangeSearch } =  useSearchBar({
  //   refetch, refetchBoardsCount
  // });
  const { Meta } = Card;
  // console.log(data)
  const onClickMoveToPage = useMoveToPage();
  console.log(dataBest)
  return (
      <div>aa</div>
    // <S.Wrapper>
    //   <S.BestWrapper>
    //     {dataBest?.fetchUseditemsOfTheBest.map((el) => (
    //       <S.BestBoardCard
    //         onClick={onClickMoveToPage(`/boards/${el._id}`)}
    //         key={el._id}
    //         hoverable
    //         cover = {<S.BestBoardImg src={el.images?.[0] ?`https://storage.googleapis.com/${el.images[0]}` : "/board/profile.png"} />}
    //         >
    //           <Meta 
    //             title={el.title}
    //           />
    //           <S.BestSection>
    //             <S.BestContent>
    //               <S.BoardP>{el.name}</S.BoardP>
    //               <S.BoardP>{getDate(el.createdAt)}</S.BoardP>
    //             </S.BestContent>
    //             <S.BestContent>
    //               <S.LikeIcon />
    //               <S.BoardP>{el.likeCount}</S.BoardP>
    //             </S.BestContent>
    //           </S.BestSection>
    //       </S.BestBoardCard>
    //     ))}
    //   </S.BestWrapper>
    //   <SearchBar 
    //     onChangeKeyword = {onChangeSearch}
    //   />
    //   <S.TableTop />
    //   <S.Row>
    //     <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
    //     <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
    //     <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
    //     <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
    //   </S.Row>
    //   {data?.fetchBoards.map((el) => (
    //     <S.Row key={el._id}>
    //       <S.ColumnBasic>
    //         {String(el._id).slice(-4).toUpperCase()}
    //       </S.ColumnBasic>
    //       <S.ColumnTitle id={el._id} onClick={onClickMoveToPage(`/boards/${el._id}`)}>
    //         {el.title.replaceAll( keyword, `${SECRET}${keyword}${SECRET}`)
    //         .split(SECRET).map(el => (
    //           <S.TextToken
    //             key={uuidv4()}
    //             isMatched={keyword === el}
    //           >
    //             {el}
    //           </S.TextToken>
    //         ))}
    //       </S.ColumnTitle>
    //       <S.ColumnBasic>{el.writer}</S.ColumnBasic>
    //       <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
    //     </S.Row>
    //   ))}
    //   <S.TableBottom />
    //   <S.Footer>
    //     <S.Button onClick={onClickMoveToPage("/boards/write")}>
    //       <S.PencilIcon src="/board/list/write.png" />
    //       게시물 등록하기
    //     </S.Button>
    //   </S.Footer>
    // </S.Wrapper>
  );
}