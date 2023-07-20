import { useQuery } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_COMMENTS } from "./BoardCommentList.queries";
import { useRouter } from "next/router";
import type { IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";

export default function BoardCommentListContainer(): JSX.Element {
  const router = useRouter()
  if (typeof router.query.boardid !== 'string') return <></>;

  const { data } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_COMMENTS, {
    variables: {
      boardId: router.query.boardid 
    }
  })

  return <BoardCommentListUI 
        data = {data}
        />
}