import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";
import type { ChangeEvent } from "react";

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IBoardWritePropsUI {
  onValid : (data: BoardData) => void;
  register : UseFormRegister<FormValue>;
  handleSubmit : UseFormHandleSubmit<FormValue>;
  data?: Pick<IQuery, "fetchBoard">;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdate: (data: BoardData) => Promise<void>;
  isActive: boolean;
  isEdit: boolean;
  errors: any;
}

export type BoardData = {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export interface FormValue {
  writer: string;
  password: string;
  title: string;
  contents: string;
  boardAddress: string;
  youtubeUrl: string;
}