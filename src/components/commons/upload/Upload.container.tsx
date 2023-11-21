import { useRef } from "react";
import { UPLOAD_FILE } from "./Upload.queries";
import { useMutation } from "@apollo/client";
import UploadUI from "./Upload.presenter";
import type { IUploadsProps } from "./Upload.types";
import UploadValidation from "./Upload.validation";

export default function UploadContainer(props: IUploadsProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0];
    const isValid = UploadValidation(file);
    console.log(isValid);
    if (!isValid) return;
    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UploadUI
      data={props.data}
      profile={props.profile}
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
