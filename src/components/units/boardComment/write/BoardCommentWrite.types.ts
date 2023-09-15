import type { ChangeEvent } from "react";
import type { IBoardComment } from "../../../../commons/types/generated/types";

interface Iinputs {
  writer: string
  password: string
  contents: string
}

export interface IBoardCommentWriteStyleProps {
  isEdit: boolean;
}

export interface IBoardCommentWriteProps {
  // onChangeWriter?: (e: ChangeEvent<HTMLInputElement>) => void;
  // onChangePassword?: (e: ChangeEvent<HTMLInputElement>) => void;
  // onChangeContents?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeInput?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement > ) => void;
  el?: IBoardComment;
  onClickWrite?: () => Promise<void>;
  onClickUpdate?: () => Promise<void>;
  // contents?: string;
  setRating? : React.Dispatch<React.SetStateAction<number>>
  inputs?: Iinputs
  isEdit: boolean | undefined;
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}