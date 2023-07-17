import { getDate } from '../../../../commons/libraries/utils';
import BoardCommentWriteContainer from '../write/BoardCommentWrite.contatiner';
import * as S from './BoardCommentList.styles'
import { DELETE_COMMENT, FETCH_COMMENTS } from "./BoardCommentList.queries";
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import type { IMapProps } from './BoardCommentList.types';
import { MouseEvent } from "react"
import type { IMutation, IMutationDeleteBoardCommentArgs } from '../../../../commons/types/generated/types';

export default function BoardCommentListUIitem(props: IMapProps): JSX.Element {
  const router = useRouter()
  const [isEdit, setIsEdit] = useState(false)
  
  const [deleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_COMMENT)

  const onClickDelete = async (e: MouseEvent<HTMLDivElement>): Promise<void> => {
    const password = prompt("비밀번호를 입력하세요.")
    try {
      if(!(e.target instanceof HTMLImageElement)) {
        alert("시스템에 문제가 있습니다")
        return;
      }

      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: e.target.id
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.boardid},
          },
        ],
      })
    } catch(error) {
      if (error instanceof Error) alert(error.message);
    }
  }

  const onClickUpdate = (): void => {
    setIsEdit(curr => !curr)
  }
  return (
      <>
          <S.ItemWrapper>
            <S.FlexWrapper>
              <S.Avatar src="/board/profile.png" />
              <S.MainWrapper>
                <S.WriterWrapper>
                  <S.Writer>{props.el.writer}</S.Writer>
                </S.WriterWrapper>
                <S.Contents>{props.el.contents}</S.Contents>
              </S.MainWrapper>
              <S.OptionWrapper>
                <S.UpdateIcon 
                  id={props.el._id}
                  src="/boardComment/update.png"
                  onClick={onClickUpdate}
                  />
                <S.DeleteIcon
                  id={props.el._id}
                  src="/boardComment/delete.png/"
                  onClick={onClickDelete}
                />
              </S.OptionWrapper>
            </S.FlexWrapper>
            <S.DateString>{getDate(props.el.createdAt)}</S.DateString>
          </S.ItemWrapper>
          {isEdit&& <BoardCommentWriteContainer 
                            isEdit={isEdit} 
                            el = {props.el}
                            setIsEdit = {setIsEdit}
                            />}
      </>
  );
}