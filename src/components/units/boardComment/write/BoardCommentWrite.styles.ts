import styled from "@emotion/styled";
import { IBoardCommentWriteStyleProps } from "./BoardCommentWrite.types";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
  margin-bottom: 3em;
`;

export const PencilIcon = styled.img``;

export const TitleSpan = styled.span`
  margin-left: 1em;
  font-size: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: ${(props: IBoardCommentWriteStyleProps) => props.isEdit ? "#fa6400": "black"};
  color: white;
  cursor: pointer;
  margin: 5px;
`;