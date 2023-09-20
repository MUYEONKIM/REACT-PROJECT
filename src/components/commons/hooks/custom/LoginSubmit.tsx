import { Modal } from "antd";
import { useRouter } from "next/router";
import { useMutationLoginUser } from "../mutations/useMutationLoginUser";

export interface LoginData {
  email: string;
  password: string
} 

export const LoginSubmit = () => {
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
