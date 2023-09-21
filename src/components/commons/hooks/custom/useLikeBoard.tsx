import { useRouter } from "next/router";
import { useMutationLikeBoard } from "../mutations/useMutationLikeBoard";
import { FETCH_BOARD } from "../queries/useQueryFetchBoard";

export const useLikeBoard = (id :string) => {
  const router = useRouter();
  const [LikeBoard] = useMutationLikeBoard();
  
  const onClickLike = async (): Promise<void> => {
    try {
      if (typeof router.query.boardid !== "string") {
        alert("시스템에 문제가 있습니다.")
        return;
      }
      await LikeBoard({
        variables : {boardId: id},
        refetchQueries : [
          {
            query : FETCH_BOARD,
            variables : {boardId : id}
          }
        ]
      })
    } catch(error) {
      console.log(error)
    }
  }

  return onClickLike
}