import Link from "next/link";
import * as L from "./login.styles";
import { useForm } from "react-hook-form";
import {
  useLoginSubmit,
  schema,
} from "../../commons/hooks/custom/useLoginSubmit";
import type { LoginData } from "../../commons/hooks/custom/useLoginSubmit";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<LoginData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const Login: SubmitHandler<LoginData> = useLoginSubmit();

  return (
    <L.LoginWrapper onSubmit={handleSubmit(Login)}>
      <L.LeftWrapper>
        <L.LeftContents>
          <L.Title>Sign In</L.Title>
          <L.InputP>
            <h5>계정이 없으신가요?</h5>
            <Link href={"/register"}>
              <L.LinkA>가입하기</L.LinkA>
            </Link>
          </L.InputP>
          <L.InputWrapper>
            <L.Idbox type="text" {...register("email")} placeholder="Email" />
            <L.ErrorMessage>{formState.errors.email?.message}</L.ErrorMessage>
          </L.InputWrapper>
          <L.InputWrapper>
            <L.Idbox
              type="password"
              {...register("password")}
              placeholder="Password"
            />
            <L.ErrorMessage>
              {formState.errors.password?.message}
            </L.ErrorMessage>
          </L.InputWrapper>
          <L.LoginButton>로그인</L.LoginButton>
        </L.LeftContents>
      </L.LeftWrapper>
    </L.LoginWrapper>
  );
}
