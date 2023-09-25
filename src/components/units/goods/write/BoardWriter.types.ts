import type { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import type { IQuery } from "../../../../commons/types/generated/types";
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
  onChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChnageFileUrls: (fileUrl : string, index: number) => void;
  onClickUpdate: (data: BoardData) => Promise<void>;
  onClickAddressSearch: (e: any) => void;
  isModalOpen: boolean;
  isActive: boolean;
  isEdit: boolean;
  errors: any;
  onClickAddress: (data: any) => void
  zipcode: string;
  address: string;
  contextHolder: any;
  fileUrls: string[];
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