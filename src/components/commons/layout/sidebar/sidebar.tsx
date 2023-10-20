import { useEffect, useState } from "react";
import * as S from "./sidebar.style";
import type { IUseditem } from "../../../../commons/types/generated/types";
import { LikeFilled } from "@ant-design/icons";
import { getPrice } from "../../../../commons/libraries/price";



export default function SideBar() {
  const [ items, setItems] = useState<IUseditem[]>([]);
  useEffect(() => {
    const storedItems = localStorage.getItem("todaylist");
    if (!storedItems) return;
    setItems(JSON.parse(storedItems))
  }, [items])
  return (
      <S.SideBarWrapper>
        <S.SideBarTitle>오늘 본 상품</S.SideBarTitle>
          {items.map((el) => (
          <S.SideBarContents key={el._id}>
            <S.SideBarP>
              <LikeFilled style={{color: "#ffd903"}}/>&nbsp;&nbsp;
              {el.pickedCount}
            </S.SideBarP>
            {el.images &&
            <S.SidaBarImg 
            src={`https://storage.googleapis.com/${el.images[0]}`} 
            />}
            <S.SidebarDetail>
              <S.SideBarName>
                {el.name}
              </S.SideBarName>
              <S.SideBarRemarks>
                {el.remarks}
              </S.SideBarRemarks>
              <S.SideBarPrice>
                {getPrice(el.price)}
              </S.SideBarPrice>
            </S.SidebarDetail>
          </S.SideBarContents>
          ))}
      </S.SideBarWrapper>
  )
}