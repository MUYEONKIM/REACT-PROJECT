
import { useRouter } from "next/router";
import LayoutBanner from "./banner/banner.container";
import LayoutHeader from "./header/header.container";
import LayoutNavigation from "./navigation/navigation.container";
import styled from "@emotion/styled";

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <Body>{children}</Body>
    </>:
    <>
      {children}
    </>
    }
    </>
  );
}