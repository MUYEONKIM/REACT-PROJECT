import { useRouter } from "next/router";
import { useMutationToggleUseditemPick } from "../mutations/useMutationToggleUseditemPick";
import { FETCH_USED_ITEM } from "../queries/useQueryFetchUseditem";
import { FETCH_USED_ITEMS_PICK } from "../queries/useQueryFetchUseditemsPicked";

export const useLikeitem = (id: string) => {
  const router = useRouter();
  const [LikeItem] = useMutationToggleUseditemPick();

  const onClickLike = async (): Promise<void> => {
    try {
      if (typeof router.query.boardid !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      await LikeItem({
        variables: { useditemId: id },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: id },
          },
          {
            query: FETCH_USED_ITEMS_PICK,
            variables: { search: "" },
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return onClickLike;
};
