import * as S from "./BoardWriter.styles";
import { IBoardWritePropsUI } from "./BoardWriter.types";

export default function BoardWriteUI(props: IBoardWritePropsUI) {
  return (
    <S.Wrapper onSubmit={props.isEdit? 
                        props.handleSubmit(props.onClickUpdate) : 
                        props.handleSubmit(props.onValid)}>
      <S.Title>{props.isEdit? "게시글 수정": "게시글 등록"}</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.Writer {...props.register("writer", {
            validate : (value) => value ? true:"작성자를 작성해주세요."}
          )} 
          onChange={e => props.onChangeWriter(e)}
          type="text" placeholder="이름을 적어주세요."
          defaultValue={props.data?.fetchBoard.writer ?? ""}
          readOnly={Boolean(props.data?.fetchBoard.writer)}/>
          <S.Error>{props.errors.writer?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password {...props.register("password", {
            validate : (value) => value? true: "비밀번호를 작성해주세요."}
          )}
          onChange={e => props.onChangePassword(e)}
          type="password" placeholder="비밀번호를 작성해주세요." />
          <S.Error>{props.errors.password?.message}</S.Error>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject {...props.register("title", {
          validate : (value) => value? true: "제목을 작성해주세요."}
          )} 
          onChange = {e => props.onChangeTitle(e)}
          type="text" placeholder="제목을 작성해주세요."
          defaultValue={props.data?.fetchBoard.title} />
          <S.Error>{props.errors.title?.message}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents {...props.register("contents", {
          validate : (value) => value? true: "내용을 작성해주세요."}
          )} 
          onChange={e => props.onChangeContents(e)}
          placeholder="내용을 작성해주세요."
          defaultValue={props.data?.fetchBoard.contents} />
          <S.Error>{props.errors.contents?.message}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZipcodeWrapper>
          <S.Zipcode {...props.register("boardAddress")} placeholder="07250" />
          <S.SearchButton>우편번호 검색</S.SearchButton>
        </S.ZipcodeWrapper>
        <S.Address />
        <S.Address />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube {...props.register("youtubeUrl")} placeholder="링크를 복사해주세요." />
      </S.InputWrapper>
      <S.ImageWrapper>
        <S.Label>사진첨부</S.Label>
        <S.UploadButton>+</S.UploadButton>
        <S.UploadButton>+</S.UploadButton>
        <S.UploadButton>+</S.UploadButton>
      </S.ImageWrapper>
      <S.OptionWrapper>
        <S.Label>메인설정</S.Label>
        <S.RadioButton type="radio" id="youtube" name="radio-button" />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" id="image" name="radio-button" />
        <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
      </S.OptionWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton 
          isActive={props.isActive} 
          type="submit">{props.isEdit? "수정하기": "등록하기"}</S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}