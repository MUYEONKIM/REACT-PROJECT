import BoardDetailContainer from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentWriteContainer from "../../../src/components/units/boardComment/write/BoardCommentWrite.contatiner";
import BoardCommentListContainer from "../../../src/components/units/boardComment/list/BoardCommentList.contatiner";

export default function BoardsDetailPage() {
  return(
    <>
      <BoardDetailContainer />
      <BoardCommentWriteContainer />
      <BoardCommentListContainer />
    </>
  )
}