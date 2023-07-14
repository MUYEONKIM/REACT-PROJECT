import BoardListUI from "./Boardlist.presenter";
import { FetchBoards } from "./Boardlist.quires";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardlistContainer() {
  const router = useRouter()
  const { data } = useQuery(FetchBoards) // page변수를 이용해서 해줄때느 variables를 쓰기 (variables가 ?랑 같은 거임 기억할것!)
  
  const onClickMoveToBoarWrite = () => {
    router.push("/boards/write")
  };

  const onClickMoveToBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`)
  };
  return <BoardListUI 
          data = {data}
          onClickMoveToBoarWrite = {onClickMoveToBoarWrite}
          onClickMoveToBoardDetail = {onClickMoveToBoardDetail}
        />
}