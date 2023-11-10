import type { ChangeEvent, RefObject } from "react";

export interface IUploadsProps {
  profile?: boolean;
  index: number;
  fileUrl: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IUploadsUIProps {
  profile?: boolean;
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
