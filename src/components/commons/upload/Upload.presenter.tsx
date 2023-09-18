import { UplaodImage, UploadButton, UploadFileHidden } from "./Upload.style";
import type { IUploadsUIProps } from "./Upload.types";

export default function UploadUI(props: IUploadsUIProps): JSX.Element {

  return (
    <>
      {props.fileUrl !== "" ? (
        <UplaodImage 
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ): (
        <UploadButton 
          type="button"
          onClick={props.onClickUpload}>
          <>+</>
          <>Upload</>
          </UploadButton>
      )}
      <UploadFileHidden 
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
