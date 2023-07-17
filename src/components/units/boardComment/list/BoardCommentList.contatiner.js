import { useQuery } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_COMMENTS } from "./BoardCommentList.queries";
import { useRouter } from "next/router";

export default function BoardCommentListContainer() {
  const router = useRouter()

  const { data } = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: router.query.boardid 
    }
  })

  return <BoardCommentListUI 
        data = {data?.fetchBoardComments}
        />
}