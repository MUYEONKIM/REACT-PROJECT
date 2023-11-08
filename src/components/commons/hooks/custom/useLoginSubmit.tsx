import { Modal } from "antd";
import { useMutationLoginUser } from "../mutations/useMutationLoginUser";
import * as yup from "yup";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { useMoveToPage } from "./useMovetoPage";

export interface LoginData {
  email: string;
  password: string;
}

export const schema = yup.object({
  email: yup.string().required("이메일을 입력해주세요"),
  password: yup.string().required("비밀번호를 입력해주세요."),
});

export const useLoginSubmit = () => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutationLoginUser();
  const { onClickMoveToPage } = useMoveToPage();

  const Login = async (data: LoginData): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      if (!result.data) return;
      setAccessToken(result.data.loginUser.accessToken);
      localStorage.setItem("accessToken", result.data.loginUser.accessToken);
      onClickMoveToPage("/")();
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  return Login;
};
