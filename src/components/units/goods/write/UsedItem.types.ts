import type { IQuery } from "../../../../commons/types/generated/types";

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IUsedItemWritePropsUI {
  data?: Pick<IQuery, "fetchUseditem">;
  isEdit: boolean;
}

export interface BoardData {
  writer: string;
  password: string;
  title: string;
  contents: string;
  youtubeUrl: string;
}

export interface FormValue {
  writer: string;
  password: string;
  title: string;
  contents: string;
  boardAddress: string;
  youtubeUrl: string;
}