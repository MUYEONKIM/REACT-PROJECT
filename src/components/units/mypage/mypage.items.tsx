import { getPrice } from "../../../commons/libraries/price";
import { getDate } from "../../../commons/libraries/utils";
export default function MypageItem(data: any) {
  const items = [
    {
      label: "이름",
      children: data?.fetchUserLoggedIn.name,
    },
    {
      label: "이메일",
      children: data?.fetchUserLoggedIn.email,
    },
    {
      label: "포인트",
      children: getPrice(data?.fetchUserLoggedIn.userPoint.amount ?? "0"),
    },
    {
      label: "가입일자",
      children: getDate(data?.fetchUserLoggedIn.createdAt),
    },
  ];
  return items;
}
