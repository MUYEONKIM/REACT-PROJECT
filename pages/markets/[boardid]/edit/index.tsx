import { gql, useQuery } from "@apollo/client";
import BoardsWriteContainer from "../../../../src/components/units/board/write/BoardWriter.container";
import { useRouter } from "next/router";
import type { IQuery, IQueryFetchBoardArgs } from "../../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId : $boardId) {
      _id
      writer
      title
      contents
    }
  }
`

export default function BoardEditPage(): JSX.Element {
  const router = useRouter()
  if (typeof router.query.boardid !== 'string') return <></>
  

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD, {
    variables: {
      boardId: router.query.boardid
    }
  })
  return <BoardsWriteContainer isEdit={true} data={data}/>
  
}