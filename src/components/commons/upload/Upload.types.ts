import type { ChangeEvent, RefObject } from "react";
import type { IFetchUser } from "../hooks/queries/useQueryFetchUser";

export interface IUploadsProps {
  data?: IFetchUser;
  profile?: boolean;
  index: number;
  fileUrl: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IUploadsUIProps {
  data?: IFetchUser;
  profile?: boolean;
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
