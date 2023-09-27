import * as S from "./GoodsDetail.styles";
import { Tooltip } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import { useCheckId } from "../../../commons/hooks/custom/useCheckId";
import { useMoveToPage } from "../../../commons/hooks/custom/useMovetoPage";
import { useQueryFetchUseditem } from "../../../commons/hooks/queries/useQueryFetchUseditem";
import { getPrice } from "../../../../commons/libraries/price";
import KakaoMapPage from "../../../commons/kakaomap/kakaomap";
import { useLikeitem } from "../../../commons/hooks/custom/useLikeitem";
import { useDeleteItem } from "../../../commons/hooks/custom/useDeleteItem";

export default function GoodsDetail(): JSX.Element {
  const {id} = useCheckId("boardid");
  const {data} = useQueryFetchUseditem({ useditemId : id});
  const onClickLike = useLikeitem(id);
  const onClickDelete = useDeleteItem(id);
  const onClickMoveToPage = useMoveToPage();

  return (
    <S.Wrapper>
        <S.CardWrapper>
          <S.Header>
            <S.AvatarWrapper>
              <S.Avatar src="/board/profile.png" />
              <S.Info>
                <S.Writer>{data?.fetchUseditem?.seller?.name}</S.Writer>
                <S.CreatedAt>
                  {getDate(data?.fetchUseditem?.createdAt)}
                </S.CreatedAt>
              </S.Info>
            </S.AvatarWrapper>
            <S.IconWrapper>
              <S.LinkIcon src="/board/detail/link.png"/>
              <Tooltip
                title={`${data?.fetchUseditem.useditemAddress?.address ?? ""} 
                        ${data?.fetchUseditem.useditemAddress?.addressDetail ?? ""}`}
                >
                <S.LocationIcon src="/board/detail/address.png"/>
              </Tooltip>
            </S.IconWrapper>
          </S.Header>
          <S.Body>
            <S.PickCount>
              <S.HeartIcon onClick={onClickLike}/>
              {data?.fetchUseditem?.pickedCount}
            </S.PickCount>
            <S.Remarks>{data?.fetchUseditem?.remarks}</S.Remarks>
            <S.Title>{data?.fetchUseditem?.name}</S.Title>
            <S.Price>{getPrice(data?.fetchUseditem?.price)}</S.Price>
            <S.ImageCarousel autoplay>
              {data?.fetchUseditem.images?.filter(el => el).map(el => 
                <S.Image 
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              )} 
            </S.ImageCarousel>
            <S.Contents>{data?.fetchUseditem?.contents}</S.Contents>
            {data?.fetchUseditem?.useditemAddress?.lat && data?.fetchUseditem?.useditemAddress?.lng? 
            <KakaoMapPage lat={data?.fetchUseditem?.useditemAddress?.lat} lng={data?.fetchUseditem?.useditemAddress?.lng}/>
          : <></>}
          </S.Body>
        </S.CardWrapper>
        <S.BottomWrapper>
          <S.Button onClick={onClickMoveToPage("/markets")}>목록</S.Button>
          <S.Button onClick={onClickMoveToPage(`/markets/${id}/edit`)}>수정</S.Button>
          <S.Button onClick={onClickDelete}>삭제</S.Button>
        </S.BottomWrapper>
      </S.Wrapper>
  );
}