import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.index";
import BoardCommentWriteContainer from "../../../src/components/units/boardComment/write/BoardCommentWrite.contatiner";
import BoardCommentListContainer from "../../../src/components/units/boardComment/list/BoardCommentList.contatiner";

export default function BoardsDetailPage(): JSX.Element {
  return(
    <>
      <BoardDetail />
      <BoardCommentWriteContainer />
      <BoardCommentListContainer />
    </>
  )
}