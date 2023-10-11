import { Modal } from "antd";
import { useMutationCreateUseditem } from "../mutations/useMutationCreateUseditem";
import { useForm } from "react-hook-form";
import { useState } from "react";
import type { Address } from "react-daum-postcode";
import { yupResolver } from "@hookform/resolvers/yup";
import { Itemschema } from "../../../../commons/schema/Item.Schema";
import { useMutationUpdateUseditem } from "../mutations/useMutationUpdateUseditem";
import { useCheckId } from "./useCheckId";
import { useMoveToPage } from "./useMovetoPage";

export interface ItemData {
  name: string
  remarks: string
  contents: string
  price: string
  tag: string
  lat? : number
  lng? : number
}

export const useCreateUseditem = () => {
  const { 
    register,
    watch,
    handleSubmit,
    setValue,
    trigger,
    formState
   } = useForm<ItemData>({
    resolver: yupResolver(Itemschema),
    mode: "onChange"
  });

  const [ createItem ] = useMutationCreateUseditem();
  const [ updateItem ] = useMutationUpdateUseditem();

  const onClickMoveToPage = useMoveToPage();
  const {id} = useCheckId("boardid");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [useditemAddress, setUseditemAddress] = useState({
   zipcode: "",
   address: "",
  });

  const onClickAddressSearch = (e: any): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen((prev) => !prev)
  };

  const onClickAddress = (data: Address): void => {
    setUseditemAddress({
      ...useditemAddress,
      zipcode: data.zonecode,
      address: data.address,
    });
    setIsModalOpen((prev) => !prev);
  };

  const onChnageFileUrls = (fileUrl : string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onChangeContents = (value: string): void => {
    console.log(value)
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  const onClickRegister = async (data: any): Promise<void> => {
    if (!fileUrls) {
      Modal.error({content: "사진을 등록해주세요"});
      return;
    }
    console.log(formState.errors)
    try {
      const result = await createItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags : [data.tag],
            useditemAddress: {
              zipcode: useditemAddress.zipcode,
              address: useditemAddress.address,
              addressDetail: data.addressDetail,
              lat: Number(data.lat),
              lng : Number(data.lng)
            },
            images: [...fileUrls],       
          }
        }
      });
      Modal.success({content: "상품등록이 완료되었습니다"})
      if (result.data?.createUseditem._id === undefined) return;
      onClickMoveToPage(`/markets/${result.data?.createUseditem._id}`)()
    } catch(error: any){
      Modal.error({ content: error.message});
    }
  };

  const onClickUpdate = async (data: any): Promise<void> => {
    if (!fileUrls) {
      Modal.error({content: "사진을 등록해주세요"});
      return;
    }
    try {
      const result = await updateItem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags : [data.tag],
            useditemAddress: {
              zipcode: useditemAddress.zipcode,
              address: useditemAddress.address,
              addressDetail: data.addressDetail,
              lat: Number(data.lat),
              lng : Number(data.lng)
            },
            images: [...fileUrls],       
          },
          useditemId: id
        }
      });
      if (result.data?.updateUseditem._id === undefined) return;
      Modal.success({content: "상품수정이 완료되었습니다"})
      onClickMoveToPage(`/markets/${result.data?.updateUseditem._id}`)()
      console.log(result)
    } catch(error: any){
      Modal.error({ content: error.message});
    }
  };

  return {
    register, 
    handleSubmit, 
    isModalOpen, 
    onChnageFileUrls, 
    onClickAddressSearch,
    onClickAddress,
    onClickRegister,
    onClickUpdate,
    fileUrls,
    useditemAddress,
    watch,
    formState,
    onChangeContents,
  };
}