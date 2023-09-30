import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationCreateUseditemArgs } from "../../../../commons/types/generated/types";

export const CREATE_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      seller {
        _id
        email
        name
        createdAt
        updatedAt
      }
    }
  }
`;

export const useMutationCreateUseditem = () => {
  const mutation = useMutation<Pick<IMutation, "createUseditem">, IMutationCreateUseditemArgs>(CREATE_ITEM);

  return mutation
}

