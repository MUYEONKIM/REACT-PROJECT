import { useRouter } from "next/router";
import { FETCH_BOARD } from "../queries/useQueryFetchBoard";
import { useMutationDislikeBoard } from "../mutations/useMutationDislikeBoard";

export const useDislikeBoard = (id :string) => {
  const router = useRouter();
  const [DislikeBoard] = useMutationDislikeBoard();
  
  const onClickDislike = async (): Promise<void> => {
    try {
      if (typeof router.query.boardid !== "string") {
        alert("시스템에 문제가 있습니다.")
        return;
      }
      await DislikeBoard({
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

  return onClickDislike
}