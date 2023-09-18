import type { IBoardDetailUIProps } from "./BoardDetail.types";
import * as S from "./BoardDetail.styles";
import { Tooltip } from "antd";
import { getDate } from "../../../../commons/libraries/utils";


export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  return (
    <S.Wrapper>
        <S.CardWrapper>
          <S.Header>
            <S.AvatarWrapper>
              <S.Avatar src="/board/profile.png" />
              <S.Info>
                <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                <S.CreatedAt>
                  {getDate(props.data?.fetchBoard?.createdAt)}
                </S.CreatedAt>
              </S.Info>
            </S.AvatarWrapper>
            <S.IconWrapper>
              <S.LinkIcon src="/board/detail/link.png"/>
              <Tooltip
                title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} 
                        ${props.data?.fetchBoard.boardAddress?.addressDetail ?? ""}`}
                >
                <S.LocationIcon src="/board/detail/address.png"/>
              </Tooltip>
            </S.IconWrapper>
          </S.Header>
          <S.Body>
            <S.Title>{props.data?.fetchBoard?.title}</S.Title>
            <S.ImageWrapper>
              {props.data?.fetchBoard.images?.filter(el => el).map(el => 
                <S.Image 
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              )}
            </S.ImageWrapper>
            <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
            {props.data?.fetchBoard?.youtubeUrl !== "" && (
            <S.Youtube
              url={props.data?.fetchBoard.youtubeUrl ?? ""}
              width="600px"
              height="330px"
            />
            )}
            <S.LikeWrapper>
              <S.IconWrapper>
                <S.LikeIcon onClick={props.onClickLike}/>
                <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
              </S.IconWrapper>
              <S.IconWrapper>
                <S.DislikeIcon onClick={props.onClickDislike}/>
                <S.DislikeCount>{props.data?.fetchBoard.dislikeCount}</S.DislikeCount>
              </S.IconWrapper>
            </S.LikeWrapper>
          </S.Body>
        </S.CardWrapper>
        <S.BottomWrapper>
          <S.Button onClick={props.onClickMoveBoards}>목록</S.Button>
          <S.Button onClick={props.onClickMoveEdit}>수정</S.Button>
          <S.Button onClick={props.onClickDelete}>삭제</S.Button>
        </S.BottomWrapper>
      </S.Wrapper>
  );
}