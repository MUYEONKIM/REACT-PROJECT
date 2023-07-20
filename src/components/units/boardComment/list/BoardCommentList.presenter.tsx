import BoardCommentListUIitem from "./BoardCommentList.presenteritem";
import type { IBoardCommentPropUI } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentPropUI): JSX.Element {
  return (
      <>
        {props.data?.fetchBoardComments.map((el) => (
          <BoardCommentListUIitem 
            key={el._id} 
            el={el} 
            />
          ))}
      </>
  );
}