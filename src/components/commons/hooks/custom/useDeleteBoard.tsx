import { useRouter } from "next/router";
import { useMutationDeleteBoard } from "../mutations/useMutationDeleteBoard";

export const useDeleteBoard = (id :string) => {
  const router = useRouter();
  const [DeleteBaord] = useMutationDeleteBoard();
  
  const onClickDelete = async (): Promise<void> => {
    if (typeof id !== "string") {
      alert("시스템에 문제가 있습니다.")
      return;
    }
    try {
      await DeleteBaord({
        variables: {boardId : id},
      });
      alert("게시글이 삭제되었습니다.")
      void router.push("/boards")
    } catch(error) {
      console.error(error)
    }
  }

  return onClickDelete
}