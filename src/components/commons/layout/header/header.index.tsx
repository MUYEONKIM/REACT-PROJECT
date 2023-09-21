import { useMoveToPage } from "../../hooks/custom/useMovetoPage";
import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./header.styles";

export default function LayoutHeader(): JSX.Element {
  const onClickMoveToPage = useMoveToPage();

  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={onClickMoveToPage("/boards")}>💎 LIVE</InnerLogo>
        <div>
          <InnerButton onClick={onClickMoveToPage("/login")}>로그인</InnerButton>
          <InnerButton onClick={onClickMoveToPage("/register")}>회원가입</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}