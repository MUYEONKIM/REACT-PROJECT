import { Modal } from "antd";
import * as yup from "yup"
import { useRouter } from "next/router";
import { useMutationCreateUseditem } from "../mutations/useMutationCreateUseditem";
import { useForm } from "react-hook-form";
import { useState } from "react";
import type { Address } from "react-daum-postcode";

export interface RegisterData {
  email: string
  password: string
  name: string
  passwordConfirm?: string | undefined
}

export const schema = yup.object({
  email: yup.string().typeError("문자를 입력해주세요.").required("이메일을 입력해주세요."),
  name: yup.string().required("이름을 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), ''], '비밀번호가 일치하지 않습니다.')
})

export const useCreateUseditem = () => {
  const { 
    register,
    watch,
    handleSubmit,
    formState: { errors }
   } = useForm();

  const [ createItem ] = useMutationCreateUseditem();
  const router = useRouter();

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

  const onClickRegister = async (data: any): Promise<void> => {
    // console.log(yup.ref('email'))
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
      // void router.push("/login")
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
    fileUrls,
    useditemAddress,
    watch
  };
}