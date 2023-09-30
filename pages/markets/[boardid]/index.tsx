import BoardCommentWriteContainer from "../../../src/components/units/boardComment/write/BoardCommentWrite.contatiner";
import BoardCommentListContainer from "../../../src/components/units/boardComment/list/BoardCommentList.contatiner";
import GoodsDetail from "../../../src/components/units/goods/detail/GoodsDetail.index";

export default function BoardsDetailPage(): JSX.Element {
  return(
    <>
      <GoodsDetail />
      <BoardCommentWriteContainer />
      <BoardCommentListContainer />
    </>
  )
}