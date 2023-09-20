import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationCreateUserArgs } from "../../../../commons/types/generated/types";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`

export const useMutationCreateUser = () => {
  const mutation = useMutation<Pick<IMutation, "createUser">, IMutationCreateUserArgs>(CREATE_USER);
  
  return mutation
}