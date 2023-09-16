import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { CREATE_COMMENT, UPDATE_COMMENT } from "./BoardCommentWrite.queries";
import { FETCH_COMMENTS } from "../list/BoardCommentList.queries";
import type { IMutation, IMutationCreateBoardCommentArgs, IMutationUpdateBoardCommentArgs } from "../../../../commons/types/generated/types";
import type { ChangeEvent } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import type { IBoardCommentWriteProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteContainer(props: IBoardCommentWriteProps): JSX.Element {
  const router = useRouter()
  const [createBoardComment] = useMutation<Pick<IMutation, "createBoardComment">,IMutationCreateBoardCommentArgs>(CREATE_COMMENT)
  const [updateBoardComment] = useMutation<Pick<IMutation, "updateBoardComment">, IMutationUpdateBoardCommentArgs>(UPDATE_COMMENT)

  // const [writer, setWriter] = useState('')
  // const [password, setPassword] = useState('')
  // const [contents, setContents] = useState('')
  const [rating, setRating] = useState(0)

  const [ inputs, setInputs ] = useState({
    writer: "",
    password: "",
    contents: "",
  })

  // const onChangeWriter = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setWriter(e.target.value)
  // }

  // const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setPassword(e.target.value)
  // }

  // const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>): void => {
  //   setContents(e.target.value)
  // }
  

  const onChangeInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ): void => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value
    });
  };

  const onClickWrite = async (): Promise<void> => {
    try {
      if(typeof router.query.boardid !== "string") {
        alert("시스템에 문제가 있습니다.")
        return;
      }
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            // writer,
            // password,
            // contents,
            // rating: star
            ...inputs,
            rating
          },
          boardId: router.query.boardid
        }, 
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {boardId: router.query.boardid}
          }
        ]
      })
    } catch(error) {
      if (error instanceof Error) alert(error.message);
    }
  }

  const onClickUpdate = async (): Promise<void> => {
    try {
      if (typeof props.el?._id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      if (!inputs.contents) {
        alert("내용이 수정되지 않았습니다.")
        return;
      }
      if (!inputs.password) {
        alert("비밀번호가 입력되지 않았습니다.")
        return;
      }
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: inputs.contents,
            rating
          },
          password: inputs.password,
          boardCommentId: props.el?._id
        },
        refetchQueries: [{
          query: FETCH_COMMENTS,
          variables: { boardId: router.query.boardid }
        },],
      })
      props.setIsEdit!(curr => !curr)
    } catch(error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return <BoardCommentWriteUI
          // onChangeWriter={onChangeWriter}
          // onChangePassword={onChangePassword}
          // onChangeContents={onChangeContents}
          onChangeInput = {onChangeInput}
          onClickWrite={onClickWrite}
          onClickUpdate={onClickUpdate}
          // contents={contents}
          setRating = {setRating} 
          inputs = {inputs}
          isEdit={props.isEdit}
          el = {props.el}
          />
}