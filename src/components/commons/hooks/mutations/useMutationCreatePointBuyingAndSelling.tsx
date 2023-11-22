import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
    }
  }
`;

export const useMutationCreatePointBuyingAndSelling = () => {
  const mutation = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_BUYING_AND_SELLING);

  return mutation;
};
