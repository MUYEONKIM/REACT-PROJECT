import { useRecoilState } from "recoil";
import { useMoveToPage } from "../../hooks/custom/useMovetoPage";
import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./header.styles";
import { accessTokenState } from "../../../../commons/stores";

export default function LayoutHeader(): JSX.Element {
  const [ accessToken ] = useRecoilState(accessTokenState);
  const onClickMoveToPage = useMoveToPage();
  console.log(accessToken)
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={onClickMoveToPage("/boards")}>💎 LIVE</InnerLogo>
        <div>
          {accessToken?(
            <>
              로그인했지롱
            </>
          ): (
            <>
              <InnerButton onClick={onClickMoveToPage("/login")}>로그인</InnerButton>
              <InnerButton onClick={onClickMoveToPage("/register")}>회원가입</InnerButton>
            </>
          )
          }
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}