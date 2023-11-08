import { useRouter } from "next/router";
import type { IUseditem } from "../../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { todaylistState } from "../../../../commons/stores";

export const useMoveToPage = () => {
  const [, setTodaylist] = useRecoilState(todaylistState);
  const router = useRouter();

  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
  };

  const onClickMarketPage = (basket: IUseditem) => () => {
    const previousBaskets: IUseditem[] = JSON.parse(
      localStorage.getItem("todaylist") ?? "[]",
    );
    const temp = previousBaskets.filter((el) => el._id === basket._id);
    if (temp.length >= 1) {
      void router.push(`/markets/${basket._id}`);
      return;
    }
    const { __typename, ...newbasket } = basket;
    const currentBaskets = [newbasket, ...previousBaskets];
    if (currentBaskets.length >= 6) {
      currentBaskets.pop();
    }
    setTodaylist(currentBaskets);
    localStorage.setItem("todaylist", JSON.stringify(currentBaskets));
    void router.push(`/markets/${basket._id}`);
  };
  return {
    onClickMoveToPage,
    onClickMarketPage,
  };
};
