import type { IBoardDetailUIProps } from "./BoardDetail.types";
import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {

  return (
    <S.Wrapper>
        <S.CardWrapper>
          <S.Header>
            <S.AvatarWrapper>
              <S.Avatar src="/board/profile.png" />
              <S.Info>
                <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                <S.CreatedAt>
                  {props.data?.fetchBoard?.createdAt}
                </S.CreatedAt>
              </S.Info>
            </S.AvatarWrapper>
          </S.Header>
          <S.Body>
            <S.Title>{props.data?.fetchBoard?.title}</S.Title>
            <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          </S.Body>
        </S.CardWrapper>
        <S.BottomWrapper>
          <S.Button onClick={props.onClickMoveBoards}>목록</S.Button>
          <S.Button onClick={props.onClickMoveEdit}>수정</S.Button>
          <S.Button onClick={props.onClickDelete}>삭제</S.Button>
        </S.BottomWrapper>
      </S.Wrapper>
  );
}