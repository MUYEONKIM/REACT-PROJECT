import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationCreateUseditemArgs } from "../../../../commons/types/generated/types";

export const CREATE_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`

export const useMutationCreateUseditem = () => {
  const mutation = useMutation<Pick<IMutation, "createUseditem">, IMutationCreateUseditemArgs>(CREATE_ITEM);

  return mutation
}

