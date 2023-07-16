import { getDate } from '../../../../commons/libraries/utils';
import * as S from './BoardCommentList.styles'

export default function BoardCommentListUI(props) {
  return (
      <div>
        {props.data?.map((el) => (
          <S.ItemWrapper>
            <S.FlexWrapper>
              <S.Avatar src="/board/profile.png" />
              <S.MainWrapper>
                <S.WriterWrapper>
                  <S.Writer>{el.writer}</S.Writer>
                </S.WriterWrapper>
                <S.Contents>{el.contents}</S.Contents>
              </S.MainWrapper>
              <S.OptionWrapper>
                <S.UpdateIcon src="/boardComment/update.png" />
                <S.DeleteIcon
                  id={el._id}
                  src="/boardComment/delete.png/"
                  onClick={props.onClickDelete}
                />
              </S.OptionWrapper>
            </S.FlexWrapper>
            <S.DateString>{getDate(el.createdAt)}</S.DateString>
          </S.ItemWrapper>
          ))}
      </div>
  );
}