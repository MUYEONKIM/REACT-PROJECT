import * as S from "./BoardCommentWrite.styles";
import type { IBoardCommentWriteProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteProps): JSX.Element {
  return (
    <S.Wrapper>
      <>
      {!props.isEdit &&<>
        <S.PencilIcon src="/boardComment/pencil.png" />
        <S.TitleSpan>댓글</S.TitleSpan>
      </>}
      </>
      <S.InputWrapper>
        <S.Input
          placeholder="작성자"
          onChange={props.onChangeWriter}
          defaultValue={props.el?.writer ?? ""}
          readOnly={props.isEdit}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
        />
      <S.Star onChange={props.setStar}/>
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          onChange={props.onChangeContents}
          defaultValue={props.el?.contents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.BottomWrapper>
          <S.ContentsLength>{props.contents?props.contents.length:0}/100</S.ContentsLength>
          {!props.isEdit ?<S.Button onClick={props.onClickWrite} isEdit={props.isEdit!}>등록하기</S.Button>:<S.Button isEdit={props.isEdit} id={props.el?._id} onClick={props.onClickUpdate}>수정하기</S.Button>}
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}