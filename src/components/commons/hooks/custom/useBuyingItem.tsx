import { useRouter } from "next/router";
import { useMutationCreatePointBuyingAndSelling } from "../mutations/useMutationCreatePointBuyingAndSelling";
import { FETCH_USER } from "../queries/useQueryFetchUser";
import { Modal } from "antd";
import { FETCH_USED_ITEM } from "../queries/useQueryFetchUseditem";

export const useBuyingItem = (id: string) => {
  const router = useRouter();
  const [buyingitem] = useMutationCreatePointBuyingAndSelling();

  const onClickBuying = async (): Promise<void> => {
    try {
      if (typeof router.query.boardid !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      await buyingitem({
        variables: { useritemId: id },
        refetchQueries: [
          {
            query: FETCH_USER,
          },
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: id },
          },
        ],
      });
      Modal.success({ content: "구매 성공하였습니다" });
    } catch (error) {
      console.log(error);
    }
  };

  return onClickBuying;
};
