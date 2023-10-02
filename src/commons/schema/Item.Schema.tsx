import * as yup from "yup"

export const Itemschema = yup.object({
  name: yup.string().typeError("문자를 입력해주세요.").required("상품명을 입력해주세요."),
  remarks: yup.string().typeError("문자를 입력해주세요.").required("상품 요약 설명을 작성해주세요"),
  contents: yup.string().typeError("문자를 입력해주세요.").required("내용을 작성해주세요"),
  price: yup.string().typeError("숫자를 입력해주세요.").required("가격을 입력해 주세요"),
  tag: yup.string().typeError("문자를 입력해주세요.").required("태그를 작성해주세요"),
  lat: yup.number().typeError("숫자를 입력해주세요."),
  lng: yup.number().typeError("숫자를 입력해주세요."),
})