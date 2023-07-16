import { useMutation, useQuery } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { DELETE_COMMENT, FETCH_COMMENTS } from "./BoardCommentList.queries";
import { useRouter } from "next/router";

export default function BoardCommentListContainer() {
  const router = useRouter()

  const { data } = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: router.query.boardid 
    }
  })

  const [deleteBoardComment] = useMutation(DELETE_COMMENT)


  const onClickDelete = async (e) => {
    const password = prompt("비밀번호를 입력")
    try {
      if(!(e.target instanceof HTMLImageElement)) {
        alert("시스템에 문제가 있습니다")
        return;
      }

      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: e.target.id
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.boardid},
          },
        ],
      })
    } catch(error) {
      alert(error.message);
    }
  }


  return <BoardCommentListUI 
        data = {data?.fetchBoardComments}
        onClickDelete = {onClickDelete}
        />
}