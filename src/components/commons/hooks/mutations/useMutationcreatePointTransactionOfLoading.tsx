import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationCreatePointTransactionOfLoadingArgs } from "../../../../commons/types/generated/types";

export const CREATE_POINT = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
      balance
    }
  }
`;

export const useMutationcreatePointTransactionOfLoading = () => {
  const mutation = useMutation<Pick<IMutation, "createPointTransactionOfLoading">, IMutationCreatePointTransactionOfLoadingArgs>(CREATE_POINT);

  return mutation
}

