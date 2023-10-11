import { useMutationcreatePointTransactionOfLoading } from "../mutations/useMutationcreatePointTransactionOfLoading";

declare const window: typeof globalThis & {
  IMP: any;
}

export default function usePayment() {
  const [ CreatePoint ] = useMutationcreatePointTransactionOfLoading(); 

  const onClickPayment = (): void => {
    const IMP = window.IMP;
    IMP.init('imp49910675');

    IMP.request_pay({ // param
      pg: "kakaopay", // 어떤 pg사를 이용할 건지?
      pay_method: "card",
      // merchant_uid: "ORD20180131-0000011", 주문 번호는 겹치면 안되서 이렇게 할 경우 알아서 랜덤이 됨
      name: "키보드",
      amount: 10,
      buyer_email: "gildong@gmail.com",
      buyer_name: "홍길동",
      buyer_tel: "010-4242-4242",
      buyer_addr: "서울특별시 강남구 신사동",
      buyer_postcode: "01181",
      m_redirect_url: "http://localhost:3000", // 모바일에서는 페이지가 이동되기 때문에 결제 이후 어디로 다시 돌아올지 적어 줌
    }, (rsp: any) => { // callback
      if (rsp.success === true) {
        void CreatePoint({
          variables: {
            impUid: rsp.imp_uid
          }
        })
      } else {
        console.log("실패")
      }
    });
  };
  return onClickPayment
}