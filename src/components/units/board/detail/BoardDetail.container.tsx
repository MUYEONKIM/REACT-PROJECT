import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import type { IMutation, IMutationDeleteBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";


export default function BoardDetailContainer(): JSX.Element {
  const router = useRouter()
  if (typeof router.query.boardid !== "string") return <></>;

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD, 
    {variables: { boardId: router.query.boardid },
  });

  const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(DELETE_BOARD)

  const onClickMoveBoards = (): void => {
    void router.push("/boards")
  }

  const onClickMoveEdit = (): void => {
    if (typeof router.query.boardid !== "string") {
      alert("시스템에 문제가 있습니다.")
      return;
    }
    void router.push(`/boards/${router.query.boardid}/edit`)
  }

  const onClickDelete = async (): Promise<void> => {
    if (typeof router.query.boardid !== "string") {
      alert("시스템에 문제가 있습니다.")
      return;
    }
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