import { useRecoilState } from "recoil";
import { useMoveToPage } from "../../hooks/custom/useMovetoPage";
import * as S from "./header.styles";
import { accessTokenState, todaylistState } from "../../../../commons/stores";
import { Modal, Popover } from "antd";
import { useQueryFetchUser } from "../../hooks/queries/useQueryFetchUser";
import {
  LogoutOutlined,
  PlusSquareOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import usePayment from "../../hooks/custom/usePayment";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { useLogout } from "../../hooks/mutations/useMutationLoginUser";
import { useRouter } from "next/router";

export default function LayoutHeader(): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setTodaylist] = useRecoilState(todaylistState);
  const [point, setPoint] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { onClickPayment, qqq, pointdata } = usePayment(point);
  const [logoutUser] = useLogout();
  const Payment = () => {
    onClickPayment();
    setIsOpen((curr) => !curr);
  };
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const onChangePoint = (value: ChangeEvent<HTMLInputElement>) => {
    setPoint(Number(value.target.value));
    value.target.value ? setIsActive(true) : setIsActive(false);
  };
  const LOGOUT = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("todaylist");
    setAccessToken("");
    setTodaylist([]);
    void logoutUser();
    void router.push("/");
  };
  const Point = pointdata?.fetchPointTransactions[0]?.balance;
  const { data } = useQueryFetchUser();
  const text = (
    <S.Profile>
      <S.Avatar src="/board/profile.png" />
      <S.Profilecontent>
        <S.ProfileSpan>{data?.fetchUserLoggedIn.name}</S.ProfileSpan>
        <S.ProfileSpan>{qqq || Point} : Point</S.ProfileSpan>
      </S.Profilecontent>
    </S.Profile>
  );
  const content = (
    <>
      <S.ProfileFunction onClick={() => setIsOpen((curr) => !curr)}>
        <S.ProfileSpan>
          <PlusSquareOutlined />
        </S.ProfileSpan>
        <S.ProfileSpan>충전하기</S.ProfileSpan>
      </S.ProfileFunction>
      <S.ProfileFunction onClick={() => console.log("aa")}>
        <S.ProfileSpan>
          <UnorderedListOutlined />
        </S.ProfileSpan>
        <S.ProfileSpan>충전내역</S.ProfileSpan>
      </S.ProfileFunction>
      <S.ProfileFunction onClick={LOGOUT}>
        <S.ProfileSpan>
          <LogoutOutlined />
        </S.ProfileSpan>
        <S.ProfileSpan>로그아웃</S.ProfileSpan>
      </S.ProfileFunction>
    </>
  );
  return (
    <S.Wrapper>
      <Modal
        open={isOpen}
        onCancel={() => setIsOpen((curr) => !curr)}
        footer=""
      >
        <S.ModalSection>
          <S.ModalIcon src="/icon/pay.png" />
          <S.ModalHeader>충전하실 금액을 입력해주세요!</S.ModalHeader>
          <S.ModalInput placeholder="포인트 입력" onChange={onChangePoint} />
          <S.ModalButton onClick={Payment} isActive={isActive}>
            충전하기
          </S.ModalButton>
        </S.ModalSection>
      </Modal>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <S.InnerWrapper>
        <S.InnerLogo onClick={onClickMoveToPage("/")}>MyWebPage</S.InnerLogo>
        <div>
          {accessToken ? (
            <>
              <S.SpanSection>
                <S.HeaderSpan>
                  {data?.fetchUserLoggedIn.name} 님 방문을 환영합니다
                </S.HeaderSpan>
                <Popover
                  placement="rightTop"
                  title={text}
                  content={content}
                  trigger="click"
                >
                  <S.Avatar src="/board/profile.png" />
                </Popover>
              </S.SpanSection>
            </>
          ) : (
            <>
              <S.InnerButton onClick={onClickMoveToPage("/login")}>
                로그인
              </S.InnerButton>
              <S.InnerButton onClick={onClickMoveToPage("/register")}>
                회원가입
              </S.InnerButton>
            </>
          )}
        </div>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
