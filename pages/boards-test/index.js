import { useState } from 'react'
import { useForm } from 'react-hook-form';
import {
    Address,
    ButtonWrapper,
    Contents,
    ImageWrapper,
    InputWrapper,
    Label,
    OptionWrapper,
    Password,
    RadioButton,
    RadioLabel,
    SearchButton,
    Subject,
    SubmitButton,
    Title,
    UploadButton,
    Wrapper,
    Writer,
    WriterWrapper,
    Youtube,
    Zipcode,
    ZipcodeWrapper,
    Error
  } from "../../styles/borderNew";
import { gql, useMutation } from '@apollo/client' 

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput : $createBoardInput){
      _id
    }
  }
`

export default function BoardsNewPage() {
  const [createBoard] = useMutation(CREATE_BOARD)

  const { 
    register,
    handleSubmit,
    formState: { errors }
   } = useForm();

  const onValid = async (data) => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          title: data.title,
          password: data.password,
          contents: data.contents,
        }
      }
    })
    console.log(result.data.createBoard._id) 
    alert("게시물이 정상적으로 등록되었습니다.")
  }

  const onInValid = (errors) => {
    console.log("에러입니다", errors)
  }

  return (
    <Wrapper onSubmit={handleSubmit(onValid, onInValid)}>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer {...register("writer", {
            validate : (value) => value ? true:"작성자를 작성해주세요."}
          )} type="text" placeholder="이름을 적어주세요."/>
          <Error>{errors.writer?.message}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password {...register("password", {
            validate : (value) => value? true: "비밀번호를 작성해주세요."}
          )}type="password" placeholder="비밀번호를 작성해주세요." />
          <Error>{errors.password?.message}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject {...register("title", {
          validate : (value) => value? true: "제목을 작성해주세요."}
          )} type="text" placeholder="제목을 작성해주세요." />
          <Error>{errors.title?.message}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents {...register("contents", {
          validate : (value) => value? true: "내용을 작성해주세요."}
          )} placeholder="내용을 작성해주세요." />
          <Error>{errors.contents?.message}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode {...register("boardAddress")} placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube {...register("youtubeUrl")} placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton type="submit">등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}