import { Fragment } from "react";
import { MenuItem, Wrapper } from "./navigation.styles";
import { useMoveToPage } from "../../hooks/custom/useMovetoPage";

const NAVIGATION_MENUS = [
  { name: "라이브게시판", page: "/boards" },
  { name: "라이브상품", page: "/markets" },
  { name: "마이페이지", page: "/mypage" },
];

export default function LayoutNavigationUI(): JSX.Element {
  const onClickMoveToPage = useMoveToPage();
  
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={onClickMoveToPage(el.page)}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}