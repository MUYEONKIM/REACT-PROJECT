import * as S from "./BoardDetail.styles";
import { Tooltip } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import { useQueryFetchBoard } from "../../../commons/hooks/queries/useQueryFetchBoard";
import { useCheckId } from "../../../commons/hooks/custom/useCheckId";
import { useLikeBoard } from "../../../commons/hooks/custom/useLikeBoard";
import { useDislikeBoard } from "../../../commons/hooks/custom/useDislikeBoard";
import { useMoveToPage } from "../../../commons/hooks/custom/useMovetoPage";
import { useDeleteBoard } from "../../../commons/hooks/custom/useDeleteBoard";

export default function BoardDetail(): JSX.Element {
  const {id} = useCheckId("boardid");
  const {data} = useQueryFetchBoard({boardId : id});
  const onClickLike = useLikeBoard(id);
  const onClickDislike = useDislikeBoard(id);
  const onClickDelete = useDeleteBoard(id);
  const onClickMoveToPage = useMoveToPage();
  
  return (
    <S.Wrapper>
        <S.CardWrapper>
          <S.Header>
            <S.AvatarWrapper>
              <S.Avatar src="/board/profile.png" />
              <S.Info>
                <S.Writer>{data?.fetchBoard?.writer}</S.Writer>
                <S.CreatedAt>
                  {getDate(data?.fetchBoard?.createdAt)}
                </S.CreatedAt>
              </S.Info>
            </S.AvatarWrapper>
            <S.IconWrapper>
              <S.LinkIcon src="/board/detail/link.png"/>
              <Tooltip
                title={`${data?.fetchBoard.boardAddress?.address ?? ""} 
                        ${data?.fetchBoard.boardAddress?.addressDetail ?? ""}`}
                >
                <S.LocationIcon src="/board/detail/address.png"/>
              </Tooltip>
            </S.IconWrapper>
          </S.Header>
          <S.Body>
            <S.Title>{data?.fetchBoard?.title}</S.Title>
            <S.ImageWrapper>
              {data?.fetchBoard.images?.filter(el => el).map(el => 
                <S.Image 
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              )}
            </S.ImageWrapper>
            <S.Contents>{data?.fetchBoard?.contents}</S.Contents>
            {data?.fetchBoard?.youtubeUrl !== "" && (
            <S.Youtube
              url={data?.fetchBoard.youtubeUrl ?? ""}
              width="600px"
              height="330px"
            />
            )}
            <S.LikeWrapper>
              <S.IconWrapper>
                <S.LikeIcon onClick={onClickLike}/>
                <S.LikeCount>{data?.fetchBoard.likeCount}</S.LikeCount>
              </S.IconWrapper>
              <S.IconWrapper>
                <S.DislikeIcon onClick={onClickDislike}/>
                <S.DislikeCount>{data?.fetchBoard.dislikeCount}</S.DislikeCount>
              </S.IconWrapper>
            </S.LikeWrapper>
          </S.Body>
        </S.CardWrapper>
        <S.BottomWrapper>
          <S.Button onClick={onClickMoveToPage("/boards")}>목록</S.Button>
          <S.Button onClick={onClickMoveToPage(`/boards/${id}/edit`)}>수정</S.Button>
          <S.Button onClick={onClickDelete}>삭제</S.Button>
        </S.BottomWrapper>
      </S.Wrapper>
  );
}