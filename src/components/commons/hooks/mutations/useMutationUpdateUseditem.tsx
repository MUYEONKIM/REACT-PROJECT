import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationUpdateUseditemArgs } from "../../../../commons/types/generated/types";

export const UPDATE_ITEM = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!,$useditemId: ID!) {
    updateUseditem(updateUseditemInput: $updateUseditemInput, useditemId: $useditemId) {
      _id
    }
  }
`

export const useMutationUpdateUseditem = () => {
  const mutation = useMutation<Pick<IMutation, "updateUseditem">, IMutationUpdateUseditemArgs>(UPDATE_ITEM);

  return mutation
}

