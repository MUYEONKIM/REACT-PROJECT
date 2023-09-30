import * as yup from "yup"

export const Registerschema = yup.object({
  email: yup.string().typeError("문자를 입력해주세요.").required("이메일을 입력해주세요."),
  name: yup.string().required("이름을 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), ''], '비밀번호가 일치하지 않습니다.')
})