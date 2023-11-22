import Link from "next/link";
import * as R from "./register.styles";
import { useForm } from "react-hook-form";
import { useRegisterSubmit } from "../../commons/hooks/custom/useRegisterSubmit";
import { yupResolver } from "@hookform/resolvers/yup";
import type { RegisterData } from "../../commons/hooks/custom/useRegisterSubmit";
import type { SubmitHandler } from "react-hook-form";
import { Registerschema } from "../../../commons/schema/Register.Schema";

export default function Register(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<RegisterData>({
    resolver: yupResolver(Registerschema),
    mode: "onChange",
  });

  const Register: SubmitHandler<RegisterData> = useRegisterSubmit();

  return (
    <R.RegisterWrapper onSubmit={handleSubmit(Register)}>
      <R.RightWrapper>
        <R.RightContents>
          <R.Title>회원가입</R.Title>
          <R.InputP>
            <h4>계정이 있으신가요?</h4>
            <Link href={"/login"}>
              <R.LinkA>로그인</R.LinkA>
            </Link>
          </R.InputP>
          <br />
          <R.InputWrapper>
            <R.InputP>이메일</R.InputP>
            <R.Idbox type="email" {...register("email")} />
            <R.ErrorMessage>{formState.errors.email?.message}</R.ErrorMessage>
          </R.InputWrapper>
          <R.InputWrapper>
            <R.InputP>이름</R.InputP>
            <R.Idbox type="text" {...register("name")} />
            <R.ErrorMessage>{formState.errors.name?.message}</R.ErrorMessage>
          </R.InputWrapper>
          <R.InputWrapper>
            <R.InputP>비밀번호</R.InputP>
            <R.Idbox type="password" {...register("password")} />
            <R.ErrorMessage>
              {formState.errors.password?.message}
            </R.ErrorMessage>
          </R.InputWrapper>
          <R.InputWrapper>
            <R.InputP>비밀번호 확인</R.InputP>
            <R.Idbox type="password" {...register("passwordConfirm")} />
            <R.ErrorMessage>
              {formState.errors.passwordConfirm?.message}
            </R.ErrorMessage>
          </R.InputWrapper>
          <R.LoginButton>회원가입</R.LoginButton>
        </R.RightContents>
      </R.RightWrapper>
    </R.RegisterWrapper>
  );
}
