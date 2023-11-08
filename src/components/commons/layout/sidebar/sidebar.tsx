import { useEffect } from "react";
import * as S from "./sidebar.style";
import { LikeFilled } from "@ant-design/icons";
import { getPrice } from "../../../../commons/libraries/price";
import { useRecoilState } from "recoil";
import { todaylistState } from "../../../../commons/stores";
import { useMoveToPage } from "../../hooks/custom/useMovetoPage";

export default function SideBar(): JSX.Element {
  // const [items, setItems] = useState<IUseditem[]>([]);
  const [todaylist, setTodaylist] = useRecoilState(todaylistState);
  const { onClickMoveToPage } = useMoveToPage();
  useEffect(() => {
    if (todaylist.length === 0) {
      const data = localStorage.getItem("todaylist");
      if (!data) return;
      const list = JSON.parse(data);
      setTodaylist(list);
    }
  }, [todaylist]);

  console.log(todaylist);
  return (
    <S.SideBarWrapper>
      <S.SideBarTitle>오늘 본 상품</S.SideBarTitle>
      {todaylist
        .filter((el) => el)
        .map((el) => (
          <S.SideBarContents
            key={el._id}
            onClick={onClickMoveToPage(`/markets/${el._id}`)}
          >
            <S.SideBarP>
              <LikeFilled style={{ color: "#ffd903" }} />
              &nbsp;&nbsp;
              {el.pickedCount}
            </S.SideBarP>
            {el.images && (
              <S.SidaBarImg
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
            )}
            <S.SidebarDetail>
              <S.SideBarName>{el.name}</S.SideBarName>
              <S.SideBarRemarks>{el.remarks}</S.SideBarRemarks>
              <S.SideBarPrice>{getPrice(el.price)}</S.SideBarPrice>
            </S.SidebarDetail>
          </S.SideBarContents>
        ))}
    </S.SideBarWrapper>
  );
}
