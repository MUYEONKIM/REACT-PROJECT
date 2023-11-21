import { Descriptions, Modal } from "antd";
import * as S from "./mypage.style";
import MypageItem from "./mypage.items";
import UploadContainer from "../../commons/upload/Upload.container";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  FETCH_USER,
  useQueryFetchUser,
} from "../../commons/hooks/queries/useQueryFetchUser";
import MypagePoint from "./mypagepoint.index";
import InfiniteScroll from "react-infinite-scroller";
import { useMoveToPage } from "../../commons/hooks/custom/useMovetoPage";
import { getPrice } from "../../../commons/libraries/price";
import useItemInfiniteScrollPicked from "../../commons/hooks/custom/useItemInfiniteScrollPicked";
import { withAuth } from "../../commons/hocs/withAuth";
import { useMutationUpdateUser } from "../../commons/hooks/mutations/useMutationUpdateUser";
import { useRouter } from "next/router";

const MyPageindex = () => {
  const { onClickMarketPage } = useMoveToPage();
  const { data: pickedData, onloadMore } = useItemInfiniteScrollPicked();
  const { data } = useQueryFetchUser();
  const [fileUrls, setFileUrls] = useState([""]);
  const [profile] = useState(true);
  const [updateUser] = useMutationUpdateUser();
  const descriptionsItems = MypageItem(data);
  const router = useRouter();

  const onChnageFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickUpdate = async () => {
    if (fileUrls[0] === "")
      return Modal.error({ content: "변경사항이 없습니다." });
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            picture: fileUrls[0],
          },
        },
        refetchQueries: [{ query: FETCH_USER }],
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <S.Wrapper>
      {data?.fetchUserLoggedIn.name}님 환영합니다
      <br />
      <br />
      {fileUrls.map((el, index) => (
        <UploadContainer
          data={data}
          profile={profile}
          key={uuidv4()}
          index={index}
          fileUrl={el}
          onChangeFileUrls={onChnageFileUrls}
        />
      ))}
      <br />
      <S.SubmitButton onClick={onClickUpdate}>수정하기</S.SubmitButton>
      <br />
      <br />
      <Descriptions
        title="&nbsp;&nbsp;&nbsp;유저 정보"
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
      <MypagePoint />
      <S.TableTop />
      <S.Table>
        <S.PickedTitle>장바구니</S.PickedTitle>
        <S.GoodsTable>
          <InfiniteScroll
            pageStart={0}
            loadMore={onloadMore}
            hasMore={true}
            useWindow={false}
          >
            {pickedData?.fetchUseditemsIPicked ? (
              pickedData?.fetchUseditemsIPicked.map((el) => (
                <S.Row key={el._id} onClick={onClickMarketPage(el)}>
                  <S.ColumnImg
                    src={
                      el.images?.[0]
                        ? `https://storage.googleapis.com/${el.images[0]}`
                        : "/board/profile.png"
                    }
                  />
                  <S.ItemContent>
                    <S.ItemSection>
                      <S.ItemTitle>{el.name}</S.ItemTitle>
                      <S.ItemRemarks>{el.remarks}</S.ItemRemarks>
                      <S.ItemTags>{el.tags}</S.ItemTags>
                    </S.ItemSection>
                    <S.ItemPrice>{getPrice(el.price)}</S.ItemPrice>
                  </S.ItemContent>
                </S.Row>
              ))
            ) : (
              <></>
            )}
          </InfiniteScroll>
        </S.GoodsTable>
      </S.Table>
    </S.Wrapper>
  );
};

export default withAuth(MyPageindex);
