import type { IBoardComment, IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentPropUI {
  data?: Pick<IQuery, "fetchBoardComments">;
  onloadMore: () => void;
}

export interface IMapProps {
  key: string;
  el: IBoardComment;
}