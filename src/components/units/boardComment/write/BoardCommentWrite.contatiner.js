import { useMutation } from "@apollo/client";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { CREATE_COMMENT } from "./BoardCommentWrite.queries";
import { FETCH_COMMENTS } from "../list/BoardCommentList.queries";

export default function BoardCommentWriteContainer() {
  const router = useRouter()
  const [createBoardComment] = useMutation(CREATE_COMMENT)

  const [writer, setWriter] = useState()
  const [password, setPassword] = useState()
  const [contents, setContents] = useState()
  const [rating, setRating] = useState()

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
            writer,
            password,
            contents,
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
  return <BoardCommentWriteUI 
          onChangeWriter={onChangeWriter}
          onChangePassword={onChangePassword}
          onChangeContents={onChangeContents}
          onChangeRating={onChangeRating}
          onClickWrite={onClickWrite}
          contents={contents}
          />
}