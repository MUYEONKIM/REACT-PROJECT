import { getPrice } from "../../../commons/libraries/price";
import { getDate } from "../../../commons/libraries/utils";
import useQueryFetchPointTransactions from "../../commons/hooks/queries/useQueryfetchPointTransactionsCountOfLoading";
export default function MypageItem(data: any) {
  const { data: point } = useQueryFetchPointTransactions();
  console.log(point?.fetchPointTransactions);
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
    {
      label: "포인트 충전 내역",
      children: point?.fetchPointTransactions.map((el) => (
        <div key={el._id}>
          <span>{el.amount}</span>
          <span>{el.balance}</span>
          <span>{el.status}</span>
          <span>{getDate(el.createdAt)}</span>
        </div>
      )),
      span: {
        xl: 2,
        xxl: 4,
      },
    },
  ];

  return items;
}
