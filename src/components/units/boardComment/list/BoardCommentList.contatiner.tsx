import { useQuery } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_COMMENTS } from "./BoardCommentList.queries";
import { useRouter } from "next/router";
import type { IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";

export default function BoardCommentListContainer(): JSX.Element {
  const router = useRouter()
  if (typeof router.query.boardid !== 'string') return <></>;

  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_COMMENTS, {
    variables: {
      boardId: router.query.boardid,
    }
  });

  const onloadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1
      }, 
      updateQuery: (prev, {fetchMoreResult}) => {
        console.log(prev, fetchMoreResult)
        if (fetchMoreResult?.fetchBoardComments === undefined)
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,],
        };
      },
    });
  };


  return (
        <BoardCommentListUI 
        data = {data}
        onloadMore = {onloadMore} 
        />
  );
}