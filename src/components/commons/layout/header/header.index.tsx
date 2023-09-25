import { useRecoilState } from "recoil";
import { useMoveToPage } from "../../hooks/custom/useMovetoPage";
import {
  Avatar,
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Profile,
  ProfileFunction,
  ProfileSpan,
  Wrapper,
} from "./header.styles";
import { accessTokenState } from "../../../../commons/stores";
import { Popover } from "antd";
import { useQueryFetchUser } from "../../hooks/queries/useQueryFetchUser";
import { LogoutOutlined } from "@ant-design/icons";

export default function LayoutHeader(): JSX.Element {
  const [ accessToken, setAccessToken ] = useRecoilState(accessTokenState);
  const onClickMoveToPage = useMoveToPage();
  const LOGOUT = () => {
    localStorage.removeItem("accessToken")
    setAccessToken("")
    console.log(localStorage.getItem("accessToken"))
  }
  const { data } = useQueryFetchUser();
  const text = (
    <Profile>
      <Avatar src="/board/profile.png" />
      <ProfileSpan>{data?.fetchUserLoggedIn.name}</ProfileSpan>
    </Profile>
  )
  const content = (
    <ProfileFunction onClick={LOGOUT}>
      <ProfileSpan >
        <LogoutOutlined/>
      </ProfileSpan>
      <ProfileSpan>로그아웃</ProfileSpan>
    </ProfileFunction>
  );
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={onClickMoveToPage("/boards")}>💎 LIVE</InnerLogo>
        <div>
          {accessToken?(
            <>
              <Popover placement="leftTop" title={text} content={content} trigger="click">
                <Avatar src="/board/profile.png"/>      
              </Popover>
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