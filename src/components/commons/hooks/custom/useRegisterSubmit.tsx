import { Modal } from "antd";
import { useMutationCreateUser } from "../mutations/useMutationRegister"
import { useRouter } from "next/router";

export interface RegisterData {
  email: string
  password: string
  name: string
  passwordConfirm?: string | undefined
}



export const useRegisterSubmit = () => {
  const [ RegisterUser ] = useMutationCreateUser();
  const router = useRouter();

  const Register = async (data: RegisterData): Promise<void> => {
    try {
      await RegisterUser({
        variables: {
          createUserInput : {
            email: data.email,
            password: data.password,
            name: data.name            
          }
        }
      });
      Modal.success({content: "회원가입을 축하드립니다"})
      void router.push("/login")
    } catch(error: any){
      Modal.error({ content: error.message});
    }
  };

  return Register;
}