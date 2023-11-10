import { Descriptions } from "antd";
import * as S from "./mypage.style";
import MypageItem from "./mypage.items";
import UploadContainer from "../../commons/upload/Upload.container";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useQueryFetchUser } from "../../commons/hooks/queries/useQueryFetchUser";
export default function MyPageindex() {
  const { data } = useQueryFetchUser();
  const [fileUrls, setFileUrls] = useState([""]);
  const [profile] = useState(true);
  const descriptionsItems = MypageItem(data);

  const onChnageFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };
  return (
    <S.Wrapper>
      {fileUrls.map((el, index) => (
        <UploadContainer
          profile={profile}
          key={uuidv4()}
          index={index}
          fileUrl={el}
          onChangeFileUrls={onChnageFileUrls}
        />
      ))}
      {data?.fetchUserLoggedIn.name}님 환영합니다
      <Descriptions
        title="유저 정보"
        bordered
        column={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        items={descriptionsItems}
      />
    </S.Wrapper>
  );
}
