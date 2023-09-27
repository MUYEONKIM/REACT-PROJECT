import { useRouter } from "next/router";
import { useMutationDeleteUseditem } from "../mutations/useMutationDeleteUseditem";
import { Modal } from "antd";

export const useDeleteItem = (id :string) => {
  const router = useRouter();
  const [DeleteBaord] = useMutationDeleteUseditem();
  
  const onClickDelete = async (): Promise<void> => {
    if (typeof id !== "string") {
      alert("시스템에 문제가 있습니다.")
      return;
    }
    try {
      await DeleteBaord({
        variables: {useditemId : id},
      });
      Modal.success({content: "게시글이 삭제되었습니다."})
      void router.push("/boards")
    } catch(error: any) {
      Modal.error({content: error.message})
    }
  }

  return onClickDelete
}