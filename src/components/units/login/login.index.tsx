import Link from "next/link";
import * as L from "./login.styles";
import { useForm } from "react-hook-form";
import { LoginSubmit } from "../../commons/hooks/custom/LoginSubmit";
import type { LoginData } from "../../commons/hooks/custom/LoginSubmit";
import type { SubmitHandler } from "react-hook-form";

export default function Login(): JSX.Element {
  const { register, handleSubmit } = useForm<LoginData>();

  const Login: SubmitHandler<LoginData> = LoginSubmit();

  return (
    <L.LoginWrapper onSubmit={handleSubmit(Login)}>
      <L.LeftWrapper>
        <L.LeftContents>
          <h1>로그인</h1>
          <L.InputSpan>
            계정이 없으신가요?&nbsp;
            <Link href={"/boards"}>
              <a>가입하기</a>
            </Link>
          </L.InputSpan>
          <L.InputWrapper>
            <L.InputSpan>
              이메일: <L.Idbox type="text" {...register("email")}/>
            </L.InputSpan>
          </L.InputWrapper>
          <L.InputWrapper>
            <L.InputSpan> 
              비밀번호: <L.Idbox type="password" {...register("password")}/>
            </L.InputSpan>
          </L.InputWrapper>
          <button>로그인</button>
        </L.LeftContents>
      </L.LeftWrapper>
    </L.LoginWrapper>
  )
}