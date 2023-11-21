import { useMoveToPage } from "../../commons/hooks/custom/useMovetoPage";
import * as S from "./main.style";

export default function MainPage(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <S.Wrapper>
        <S.WrapperTitle>ABOUT PAGE</S.WrapperTitle>
        <S.WrapperContent>
          사용자간의 상품 및 중고거래를 돕기 위한 사이트입니다
          <br />
          포인트 충전 방식으로 교환이 이루어집니다
        </S.WrapperContent>
      </S.Wrapper>
      <S.ItemsWrapper>
        <S.Content onClick={onClickMoveToPage("/boards")}>
          <S.Title>게시판</S.Title>
          <S.BoardIcon />
          <S.Explain>
            자유롭게 게시글 작성, 수정 및 삭제가 가능합니다. <br />
            게시글 상세보기는 로그인 후 이용가능 합니다
          </S.Explain>
        </S.Content>
        <S.Line />
        <S.Content onClick={onClickMoveToPage("/markets")}>
          <S.Title>중고장터</S.Title>
          <S.MarketIcon />
          <S.Explain>
            자유롭게 물건을 사고 팔 수 있는 중고장터입니다. <br />
            충전된 포인트를 이용하여 교환이 이루어집니다
          </S.Explain>
        </S.Content>
        <S.Line />
        <S.Content onClick={onClickMoveToPage("/mypage")}>
          <S.Title>마이페이지</S.Title>
          <S.MypageIcon />
          <S.Explain>
            사용자의 정보 및 장바구니 상품, 포인트 충천 및 거래 내역을 확인할 수
            있습니다.
          </S.Explain>
        </S.Content>
      </S.ItemsWrapper>
    </>
  );
}
