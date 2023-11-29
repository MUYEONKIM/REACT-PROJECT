import { useRouter } from "next/router";
import { FETCH_BOARD, useQueryFetchBoard } from "../queries/useQueryFetchBoard";
import { useMutationDislikeBoard } from "../mutations/useMutationDislikeBoard";

export const useDislikeBoard = (id: string) => {
  const router = useRouter();
  const [dislikeBoard] = useMutationDislikeBoard();
  const { data } = useQueryFetchBoard({ boardId: id });

  const onClickDislike = async (): Promise<void> => {
    if (typeof router.query.boardid !== "string") {
      alert("시스템에 문제가 있습니다.");
      return;
    }
    void dislikeBoard({
      variables: {
        boardId: id,
      },
      optimisticResponse: {
        dislikeBoard: (data?.fetchBoard.dislikeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        // cache.modify가 있었는데 이것은 기존 값을 새로운 걸로 바꾸는 것 이었음
        // writeQuery는 없던 것도 새롭게 추가 가능
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: {
            boardId: id,
          },
          data: {
            fetchBoard: {
              _id: id, // 기준이 되기 때문에 필수
              __typename: "Board", // 기준이 되기 때문에 필수
              dislikeCount: data?.dislikeBoard,
            },
          },
        });
      },
    });
  };

  return onClickDislike;
};
