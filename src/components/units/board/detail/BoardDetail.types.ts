import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickDelete: () => void; 
  onClickMoveBoards: () => void; 
  onClickMoveEdit: () => void;
}