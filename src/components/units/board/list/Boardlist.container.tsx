import BoardListUI from "./Boardlist.presenter";
import { FetchBoards } from "./Boardlist.quires";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";
import type { MouseEvent } from "react";

export default function BoardlistContainer(): JSX.Element {
  const router = useRouter()
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FetchBoards); // page변수를 이용해서 해줄때느 variables를 쓰기 (variables가 ?랑 같은 거임 기억할것!)
  
  const onClickMoveToBoarWrite = (): void => {
    void router.push("/boards/write")
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(`/boards/${event.currentTarget.id}`)
  };

  return <BoardListUI 
          data = {data}
          onClickMoveToBoarWrite = {onClickMoveToBoarWrite}
          onClickMoveToBoardDetail = {onClickMoveToBoardDetail}
        />
}