
import { useRouter } from "next/router";
import LayoutBanner from "./banner/banner.index";
import LayoutHeader from "./header/header.index";
import LayoutNavigation from "./navigation/navigation.index";
import styled from "@emotion/styled";
import SideBar from "./sidebar/sidebar";

const Content = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SideBarContainer = styled.div`
  position: absolute;
  top: 150px; 
  right: 10vw;
  height: 100%;
`;

interface ILayoutProps {
  children: JSX.Element;
}

const Page = [ "/login" , "/register"]

export default function Layout({children}: ILayoutProps): JSX.Element {
  const router = useRouter();

  const HiddenPage = Page.includes(router.asPath)
  console.log(HiddenPage)
  return (
    <>
    {!HiddenPage ?
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Content>
        <Body>{children}</Body>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
      </Content>
    </>:
    <>
      {children}
    </>
    }
    </>
  );
}