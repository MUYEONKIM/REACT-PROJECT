import { Card } from "antd";
import { useMoveToPage } from "../../../commons/hooks/custom/useMovetoPage";
import useSearchBar from "../../../commons/hooks/custom/useSearchBar";
import SearchBar from "../../../commons/search/search.index";
import * as S from "./Goodslist.style";
import { v4 as uuidv4 } from "uuid";
import { useQueryFetchUseditemsOfTheBest } from "../../../commons/hooks/queries/useQueryFetchUseditemsOfTheBest";
import { getPrice } from "../../../../commons/libraries/price";
import useItemInfiniteScroll from "../../../commons/hooks/custom/useItemInfiniteScroll";
import InfiniteScroll from "react-infinite-scroller";
import { useState } from "react";
const SECRET = "!@#";

export default function GoodsList(): JSX.Element {
  const [Soldout, setSoldout] = useState(false);
  const { data, onloadMore, refetch } = useItemInfiniteScroll(Soldout);
  const { data: dataBest } = useQueryFetchUseditemsOfTheBest();
  const { keyword, onChangeSearch } = useSearchBar({
    refetch,
  });
  const { Meta } = Card;
  const { onClickMoveToPage, onClickMarketPage } = useMoveToPage();
  const onChangeSoldout = () => {
    setSoldout((curr) => !curr);
  };
  return (
    <S.Wrapper>
      <S.BestWrapper>
        {dataBest?.fetchUseditemsOfTheBest.map((el) => (
          <S.BestBoardCard
            onClick={onClickMarketPage(el)}
            key={el._id}
            hoverable
            cover={
              <S.BestBoardImg
                src={
                  el.images?.[0]
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "/board/profile.png"
                }
              />
            }
          >
            <Meta title={el.name} />
            <S.BestSection>
              <S.BestContent>
                <S.BoardRemarks>{el.remarks}</S.BoardRemarks>
                <S.BoardPrice>{getPrice(Number(el.price))}</S.BoardPrice>
              </S.BestContent>
              <S.BestContent>
                <S.HeartIcon />
                <S.BoardP>{el.pickedCount}</S.BoardP>
              </S.BestContent>
            </S.BestSection>
          </S.BestBoardCard>
        ))}
      </S.BestWrapper>
      <S.SearchBarWrapper>
        <SearchBar onChangeKeyword={onChangeSearch} />
        <S.soldCheck onChange={onChangeSoldout}>판매된 상품 보기</S.soldCheck>
      </S.SearchBarWrapper>
      <S.TableTop />
      <S.Table Soldout={Soldout}>
        <InfiniteScroll
          pageStart={0}
          loadMore={onloadMore}
          hasMore={true}
          useWindow={false}
        >
          {data?.fetchUseditems ? (
            data?.fetchUseditems.map((el) => (
              <S.Row key={el._id} onClick={onClickMarketPage(el)}>
                <S.ColumnImg
                  src={
                    el.images?.[0]
                      ? `https://storage.googleapis.com/${el.images[0]}`
                      : "/board/profile.png"
                  }
                />
                <S.ItemContent>
                  <S.ItemSection>
                    <S.ItemTitle>
                      {el.name
                        .replaceAll(keyword, `${SECRET}${keyword}${SECRET}`)
                        .split(SECRET)
                        .map((el) => (
                          <S.TextToken key={uuidv4()}>{el}</S.TextToken>
                        ))}
                    </S.ItemTitle>
                    <S.ItemRemarks>{el.remarks}</S.ItemRemarks>
                    <S.ItemTags>{el.tags}</S.ItemTags>
                    <S.LikeSection>
                      <S.HeartIcon />
                      <S.ColumnBasic>{el.pickedCount}</S.ColumnBasic>
                    </S.LikeSection>
                  </S.ItemSection>
                  <S.ItemPrice>{getPrice(el.price)}</S.ItemPrice>
                </S.ItemContent>
              </S.Row>
            ))
          ) : (
            <></>
          )}
        </InfiniteScroll>
      </S.Table>
      <S.Footer>
        <S.Button onClick={onClickMoveToPage("/markets/write")}>
          <S.PencilIcon src="/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
