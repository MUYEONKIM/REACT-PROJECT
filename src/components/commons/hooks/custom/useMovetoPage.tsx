import { useRouter } from "next/router";
import type { IUseditem } from "../../../../commons/types/generated/types";

export const useMoveToPage = () => {
  const router = useRouter();

  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
  };

  const onClickMarketPage = (basket: IUseditem) => () => {
    const baskets: IUseditem[] = JSON.parse(
      localStorage.getItem("todaylist") ?? "[]",
    );
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length >= 1) {
      void router.push(`/markets/${basket._id}`);
      return;
    }
    const { __typename, ...newbasket } = basket;
    baskets.push(newbasket);

    localStorage.setItem("todaylist", JSON.stringify(baskets));
    void router.push(`/markets/${basket._id}`);
  };
  return {
    onClickMoveToPage,
    onClickMarketPage,
  };
};
