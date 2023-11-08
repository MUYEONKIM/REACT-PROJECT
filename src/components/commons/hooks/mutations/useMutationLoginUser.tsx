import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const useMutationLoginUser = () => {
  const mutation = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER_EXAMPLE);

  return mutation;
};

export const useLogout = () => {
  const mutation = useMutation(LOGOUT_USER);

  return mutation;
};
