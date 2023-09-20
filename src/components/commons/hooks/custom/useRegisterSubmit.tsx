import { Modal } from "antd";
import { useMutationCreateUser } from "../mutations/useMutationRegister"
import * as yup from "yup"

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

export const RegisterSubmit = () => {
  const [ RegisterUser ] = useMutationCreateUser();

  const Register = async (data: RegisterData): Promise<void> => {
    console.log(yup.ref('email'))
    try {
      const result = await RegisterUser({
        variables: {
          createUserInput : {
            email: data.email,
            password: data.password,
            name: data.name            
          }
        }
      });
      console.log(result)
    } catch(error: any){
      Modal.error({ content: error.message});
    }
  };

  return Register;
}