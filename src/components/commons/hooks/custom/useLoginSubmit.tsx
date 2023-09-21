import { Modal } from "antd";
import { useRouter } from "next/router";
import { useMutationLoginUser } from "../mutations/useMutationLoginUser";
import * as yup from "yup"

export interface LoginData {
  email: string;
  password: string
}

export const schema = yup.object({
  email: yup.string().required("이메일을 입력해주세요"),
  password: yup.string().required("비밀번호를 입력해주세요.")
})

export const useLoginSubmit = () => {
  const [loginUser] = useMutationLoginUser();

  const router = useRouter();

  const Login = async (data: LoginData): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password
        }
      });
      if(!result.data) return;
      localStorage.setItem("accessToken", result.data.loginUser.accessToken);
      void router.push('/')
    } catch(error: any) {
      Modal.error({content: error.message});
    };
  }
  return Login;
}
