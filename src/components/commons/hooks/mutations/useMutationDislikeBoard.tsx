import { gql, useMutation } from "@apollo/client";
import type { IMutation, IMutationDislikeBoardArgs } from "../../../../commons/types/generated/types";

export const DISLIKE_BOARD = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;

export const useMutationDislikeBoard = () => {
  const mutation = useMutation<Pick<IMutation, "dislikeBoard">, IMutationDislikeBoardArgs>(DISLIKE_BOARD);

  return mutation
}

