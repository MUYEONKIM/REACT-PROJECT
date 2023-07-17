import BoardCommentListUIitem from "./BoardCommentList.presenteritem";

export default function BoardCommentListUI(props) {
  return (
      <>
        {props.data?.map((el) => (
          <BoardCommentListUIitem 
            key={el._id} 
            el={el} 
            />
          ))}
      </>
  );
}