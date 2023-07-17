import type { ChangeEvent } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommentWriteStyleProps {
  isEdit: boolean;
}

export interface IBoardCommentWriteProps {
  onChangeWriter?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  el?: IBoardComment;
  onClickWrite?: () => Promise<void>;
  onClickUpdate?: () => Promise<void>;
  contents?: string;
  isEdit: boolean | undefined;
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}