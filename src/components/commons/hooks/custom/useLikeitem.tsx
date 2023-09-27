import { useRouter } from "next/router";
import { useMutationToggleUseditemPick } from "../mutations/useMutationToggleUseditemPick";
import { FETCH_USED_ITEM } from "../queries/useQueryFetchUseditem";

export const useLikeitem = (id :string) => {
  const router = useRouter();
  const [LikeItem] = useMutationToggleUseditemPick();
  
  const onClickLike = async (): Promise<void> => {
    try {
      if (typeof router.query.boardid !== "string") {
        alert("시스템에 문제가 있습니다.")
        return;
      }
      await LikeItem({
        variables : {useditemId: id},
        refetchQueries : [
          {
            query : FETCH_USED_ITEM,
            variables : {useditemId : id}
          }
        ]
      })
    } catch(error) {
      console.log(error)
    }
  }

  return onClickLike
}