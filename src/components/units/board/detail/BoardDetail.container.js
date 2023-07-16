import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";


export default function BoardDetailContainer() {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardid },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD)

  const onClickMoveBoards = () => {
    router.push("/boards")
  }

  const onClickMoveEdit = () => {
    router.push(`/boards/${router.query.boardid}/edit`)
  }

  const onClickDelete = async () => {
    console.log('aaa')
    try {
      await deleteBoard({
        variables: {boardId : router.query.boardid},
      });
      alert("게시글이 삭제되었습니다.")
      router.push("/boards")
    } catch(error) {
      console.error(error)
    }
  }
  
  return <BoardDetailUI 
          data={data} 
          onClickDelete={onClickDelete} 
          onClickMoveBoards={onClickMoveBoards} 
          onClickMoveEdit={onClickMoveEdit}/>
}