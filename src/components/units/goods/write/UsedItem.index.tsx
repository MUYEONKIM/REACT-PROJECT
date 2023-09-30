import { useCreateUseditem } from "../../../commons/hooks/custom/useCreateUseditem";
import KakaoMapPage from "../../../commons/kakaomap/kakaomap";
import UploadContainer from "../../../commons/upload/Upload.container";
import * as S from "./UsedItem.styles";
import type { IUsedItemWritePropsUI } from "./UsedItem.types";
import { v4 as uuidv4 } from "uuid"

export default function UsedItemWrite(props: IUsedItemWritePropsUI): JSX.Element {
  const {
    register, 
    handleSubmit, 
    isModalOpen, 
    onChnageFileUrls, 
    onClickAddressSearch,
    onClickAddress,
    onClickRegister,
    fileUrls,
    useditemAddress,
    watch,
    formState,
    onClickUpdate
  } = useCreateUseditem();
  
  return (
    <>
    {/* {props.contextHolder} */}
    {isModalOpen && (
    <S.AddressModal onCancel={onClickAddressSearch} visible={true}>
      <S.AddressSearchInput onComplete={onClickAddress}/>
    </S.AddressModal>
    )}
    <S.Wrapper onSubmit={props.isEdit? 
                        handleSubmit(onClickUpdate) : 
                        handleSubmit(onClickRegister)}>
      <S.Title>{props.isEdit? "게시글 수정": "게시글 등록"}</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>상품명</S.Label>
          <S.Writer {...register("name")}
          type="text" placeholder="상품명을 적어주세요."
          defaultValue={props.data?.fetchUseditem.name}
          />
          <S.Error>{formState.errors.name?.message}</S.Error>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>한줄요약</S.Label>
        <S.Subject {...register("remarks")}
          type="text" placeholder="상품 요약 설명을 작성해주세요."
          defaultValue={props.data?.fetchUseditem.remarks}
           />
          <S.Error>{formState.errors.remarks?.message}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>상품설명</S.Label>
        <S.Contents {...register("contents")} 
          placeholder="내용을 작성해주세요."
          defaultValue={props.data?.fetchUseditem.contents}
          />
          <S.Error>{formState.errors.contents?.message}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>판매 가격</S.Label>
        <S.Subject {...register("price")} 
          type="text" placeholder="가격을 입력해주세요." 
          defaultValue={props.data?.fetchUseditem.price ?? ""}
          />
          <S.Error>{formState.errors.contents?.message}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>태그 입력</S.Label>
        <S.Subject {...register("tag")} 
          type="text" placeholder="태그를 작성해주세요"
          defaultValue={props.data?.fetchUseditem.tags ?? ""}
          />
         <S.Error>{formState.errors.tag?.message}</S.Error>
      </S.InputWrapper>
      <S.AddressWrapper>
        <S.AddressSection>
        <S.Label>거래 위치</S.Label>
        <S.ZipcodeWrapper>
          <S.Zipcode  
                        placeholder="07250"
                        readOnly
                        value={
                          useditemAddress.zipcode !== ""
                          ? useditemAddress.zipcode
                          : props.data?.fetchUseditem.useditemAddress?.zipcode ?? ""
                        } />
          <S.SearchButton onClick={onClickAddressSearch}>우편번호 검색</S.SearchButton>
        </S.ZipcodeWrapper>
            <S.Address
                readOnly
                value={
                  useditemAddress.address !== ""
                    ? useditemAddress.address
                    : props.data?.fetchUseditem.useditemAddress?.address ?? ""
                  }
                placeholder=  "우편번호 검색을 눌러 주소를 입력하세요"
              />
              <S.Address
                placeholder="상세주소를 입력하세요"                
              /><br/>
              <S.Label>GPS</S.Label>
              <S.GPSWrapper>
                <S.GPSInput {...register("lat")} placeholder="LAT"
                defaultValue={props.data?.fetchUseditem.useditemAddress?.lat ?? ""}
                />
                <S.GPSInput {...register("lng")} placeholder="LNG"
                defaultValue={props.data?.fetchUseditem.useditemAddress?.lng ?? ""}
                />
              </S.GPSWrapper>
          <S.Error>{formState.errors.lat?.message}</S.Error>
          </S.AddressSection>
          <S.MapSection>
            <KakaoMapPage lat={watch("lat")} lng={watch("lng")}/>
          </S.MapSection>
      </S.AddressWrapper>
      <S.ImageWrapper>
        <S.Label>사진첨부</S.Label>
        <S.ImageBox>
          {fileUrls.map((el, index) => (
            <UploadContainer 
              key = {uuidv4()}
              index = {index}
              fileUrl = {el}
              onChangeFileUrls= {onChnageFileUrls}
            />
          ))}
        </S.ImageBox>
      </S.ImageWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton 
          type="submit">{props.isEdit? "수정하기": "등록하기"}</S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
    </>
  );
}