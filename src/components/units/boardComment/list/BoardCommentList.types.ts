import { IBoardComment, IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentPropUI {
  data?: Pick<IQuery, "fetchBoardComments">;
}

export interface IMapProps {
  key: string;
  el: IBoardComment;
}