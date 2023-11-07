import { useRouter } from "next/router";
import LayoutBanner from "./banner/banner.index";
import LayoutHeader from "./header/header.index";
import LayoutNavigation from "./navigation/navigation.index";
import styled from "@emotion/styled";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}

const Page = ["/login", "/register"];

export default function Layout({ children }: ILayoutProps): JSX.Element {
  const router = useRouter();

  const HiddenPage = Page.includes(router.asPath);
  return (
    <>
      {!HiddenPage ? (
        <>
          <LayoutHeader />
          <LayoutBanner />
          <LayoutNavigation />
          <Body>{children}</Body>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
