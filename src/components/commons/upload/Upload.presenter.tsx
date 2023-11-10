import { Avatar } from "antd";
import {
  ProfileImage,
  ProfileUpload,
  UplaodImage,
  UploadButton,
  UploadFileHidden,
} from "./Upload.style";
import type { IUploadsUIProps } from "./Upload.types";
// ) : props.profile ? (
// <>
//   <Avatar
//     size={128}
//     icon={<ProfileUpload />}
//     onClick={props.onClickUpload}
//   />
// </>
// ) : (
export default function UploadUI(props: IUploadsUIProps): JSX.Element {
  return (
    <>
      {props.profile ? (
        props.fileUrl !== "" ? (
          <Avatar
            style={{ backgroundColor: "white" }}
            size={128}
            onClick={props.onClickUpload}
            icon={
              <ProfileImage
                src={`https://storage.googleapis.com/${props.fileUrl}`}
              />
            }
          />
        ) : (
          <Avatar
            size={128}
            icon={<ProfileUpload />}
            onClick={props.onClickUpload}
          />
        )
      ) : props.fileUrl !== "" ? (
        <UplaodImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton type="button" onClick={props.onClickUpload}>
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
