
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
export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
    </>
  );
}