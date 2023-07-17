import { useMutation } from "@apollo/client";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { CREATE_COMMENT, UPDATE_COMMENT } from "./BoardCommentWrite.queries";
import { FETCH_COMMENTS } from "../list/BoardCommentList.queries";

export default function BoardCommentWriteContainer(props) {
  const router = useRouter()
  const [createBoardComment] = useMutation(CREATE_COMMENT)
  const [updateBoardComment] = useMutation(UPDATE_COMMENT)

  const [writer, setWriter] = useState('')
  const [password, setPassword] = useState('')
  const [contents, setContents] = useState('')
  const [rating, setRating] = useState(0)

  const onChangeWriter = (e) => {
    setWriter(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onChangeContents = (e) => {
    setContents(e.target.value)
  }

  const onChangeRating = (e) => {
    setRating(e.target.value)
  }
  const onClickWrite = async () => {
    try {
      if(typeof router.query.boardid !== "string") {
        alert("시스템에 문제가 있습니다.")
        return;
      }
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: contents,
            rating: 0
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
      console.log(error.message)
    }
  }

  const onClickUpdate = async (e) => {
    try {
      if (!contents) {
        alert("내용이 수정되지 않았습니다.")
        return;
      }
      if (!password) {
        alert("비밀번호가 입력되지 않았습니다.")
        return;
      }
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: contents,
            rating: 0
          },
          password: password,
          boardCommentId: props.el?._id
        },
        refetchQueries: [{
          query: FETCH_COMMENTS,
          variables: { boardId: router.query.boardid }
        },],
      })
      props.setIsEdit(false)
    } catch(error) {
      alert(error.message)
    }
  }


  return <BoardCommentWriteUI 
          onChangeWriter={onChangeWriter}
          onChangePassword={onChangePassword}
          onChangeContents={onChangeContents}
          onChangeRating={onChangeRating}
          onClickWrite={onClickWrite}
          onClickUpdate={onClickUpdate}
          contents={contents}
          isEdit={props.isEdit}
          el = {props.el}
          />
}