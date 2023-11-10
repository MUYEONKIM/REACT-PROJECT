import { getPrice } from "../../../commons/libraries/price";
import { useMoveToPage } from "../../commons/hooks/custom/useMovetoPage";
import { useQueryFetchUseditemsOfTheBest } from "../../commons/hooks/queries/useQueryFetchUseditemsOfTheBest";
import * as G from "../goods/list/Goodslist.style";
import * as S from "../board/list/Boardlist.style";
import * as T from "./main.style";
import { Card } from "antd";
import { useQueryFetchBoardsOfTheBest } from "../../commons/hooks/queries/useQueryFetchBoardsOfTheBest";
import { getDate } from "../../../commons/libraries/utils";

export default function MainPage(): JSX.Element {
  const { data } = useQueryFetchBoardsOfTheBest();
  const { data: dataBest } = useQueryFetchUseditemsOfTheBest();
  const { onClickMoveToPage, onClickMarketPage } = useMoveToPage();
  const { Meta } = Card;

  return (
    <>
      <T.Wrapper>
        <T.ItemsWrapper>
          가장 뜨는 상품
          {dataBest?.fetchUseditemsOfTheBest.map((el) => (
            <G.BestBoardCard
              onClick={onClickMarketPage(el)}
              key={el._id}
              hoverable
              cover={
                <G.BestBoardImg
                  src={
                    el.images?.[0]
                      ? `https://storage.googleapis.com/${el.images[0]}`
                      : "/board/profile.png"
                  }
                />
              }
            >
              <Meta title={el.name} />
              <G.BestSection>
                <G.BestContent>
                  <G.BoardRemarks>{el.remarks}</G.BoardRemarks>
                  <G.BoardPrice>{getPrice(Number(el.price))}</G.BoardPrice>
                </G.BestContent>
                <G.BestContent>
                  <G.HeartIcon />
                  <G.BoardP>{el.pickedCount}</G.BoardP>
                </G.BestContent>
              </G.BestSection>
            </G.BestBoardCard>
          ))}
        </T.ItemsWrapper>
        <T.ItemsWrapper>
          가장 핫한 게시판
          {data?.fetchBoardsOfTheBest.map((el) => (
            <S.BestBoardCard
              onClick={onClickMoveToPage(`/boards/${el._id}`)}
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
              <Meta title={el.title} />
              <S.BestSection>
                <S.BestContent>
                  <S.BoardP>{el.writer}</S.BoardP>
                  <S.BoardP>{getDate(el.createdAt)}</S.BoardP>
                </S.BestContent>
                <S.BestContent>
                  <S.LikeIcon />
                  <S.BoardP>{el.likeCount}</S.BoardP>
                </S.BestContent>
              </S.BestSection>
            </S.BestBoardCard>
          ))}
        </T.ItemsWrapper>
      </T.Wrapper>
    </>
  );
}
