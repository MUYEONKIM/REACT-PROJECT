import type { IQuery } from "../../../../commons/types/generated/types"
import type { MouseEvent } from "react";

export interface IBoardlistUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToBoarWrite: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}