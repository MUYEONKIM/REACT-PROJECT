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
        // props.fileUrl !== "" ? (
        <Avatar
          style={{ backgroundColor: "white" }}
          size={128}
          onClick={props.onClickUpload}
          icon={
            props.fileUrl !== "" ? (
              <ProfileImage
                src={`https://storage.googleapis.com/${props.fileUrl}`}
              />
            ) : props.data?.fetchUserLoggedIn.picture ? (
              <ProfileImage
                src={`https://storage.googleapis.com/${props.data.fetchUserLoggedIn.picture}`}
              />
            ) : (
              <ProfileUpload />
            )
          }
        />
      ) : // ) : (
      //   <Avatar
      //     size={128}
      //     icon={<ProfileUpload />}
      //     onClick={props.onClickUpload}
      //   />
      // )
      props.fileUrl !== "" ? (
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
