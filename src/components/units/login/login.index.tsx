import Link from "next/link";
import * as L from "./login.styles";
import { useForm } from "react-hook-form";
import { LoginSubmit, schema } from "../../commons/hooks/custom/useLoginSubmit";
import type { LoginData } from "../../commons/hooks/custom/useLoginSubmit";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<LoginData>({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  const Login: SubmitHandler<LoginData> = LoginSubmit();

  return (
    <L.LoginWrapper onSubmit={handleSubmit(Login)}>
      <L.LeftWrapper>
        <L.LeftContents>
          <h1>로그인</h1>
          <L.InputP>
            계정이 없으신가요?&nbsp;
            <Link href={"/register"}>
              <a>가입하기</a>
            </Link>
          </L.InputP>
          <L.InputWrapper>
            <L.InputP>
              이메일
            </L.InputP>
            <L.Idbox type="text" {...register("email")}/>
            <L.ErrorMessage>{formState.errors.email?.message}</L.ErrorMessage>
          </L.InputWrapper>
          <L.InputWrapper>
            <L.InputP> 
              비밀번호
            </L.InputP>
            <L.Idbox type="password" {...register("password")}/>
            <L.ErrorMessage>{formState.errors.password?.message}</L.ErrorMessage>
          </L.InputWrapper>
          <button>로그인</button>
        </L.LeftContents>
      </L.LeftWrapper>
    </L.LoginWrapper>
  )
}