import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationToggleUseditemPickArgs } from "../../../../commons/types/generated/types";

export const LIKE_ITEM = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const useMutationToggleUseditemPick = () => {
  const mutation = useMutation<Pick<IMutation, "toggleUseditemPick">, IMutationToggleUseditemPickArgs>(LIKE_ITEM);

  return mutation
}

