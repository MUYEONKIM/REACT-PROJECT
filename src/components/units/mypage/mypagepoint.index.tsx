import { getPrice } from "../../../commons/libraries/price";
import { getDate } from "../../../commons/libraries/utils";
import useQueryFetchPointTransactions from "../../commons/hooks/queries/useQueryfetchPointTransactionsCountOfLoading";
import * as S from "./mypagepoint.style";

export default function MypagePoint(): JSX.Element {
  const { data: point } = useQueryFetchPointTransactions();
  return (
    <>
      <S.TableTop />
      <S.PointWrapper style={{ width: "823.64px" }}>
        <S.PointTitle>포인트 충전내역</S.PointTitle>
        <S.Row>
          <S.ColumnHeaderBasic>상태</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>금액</S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle>잔액</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>거래 일시</S.ColumnHeaderBasic>
        </S.Row>
        {point?.fetchPointTransactions.map((el: any) => (
          <S.Row key={el._id}>
            <S.ColumnBasic>{el.status}</S.ColumnBasic>
            <S.ColumnBasic>{getPrice(el.amount)}</S.ColumnBasic>
            <S.ColumnTitle id={el._id}>{getPrice(el.balance)}</S.ColumnTitle>
            <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
          </S.Row>
        ))}
      </S.PointWrapper>
      <S.TableBottom />
    </>
  );
}
