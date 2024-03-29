import InfiniteScroll from "react-infinite-scroller";
import BoardCommentListUIitem from "./BoardCommentList.presenteritem";
import type { IBoardCommentPropUI } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentPropUI): JSX.Element {
  return (
      <>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onloadMore}
          hasMore={true}
        >
          {props.data?.fetchBoardComments.map((el) => (
            <BoardCommentListUIitem 
              key={el._id} 
              el={el} 
              />
            ))}
        </InfiniteScroll>
      </>
  );
}