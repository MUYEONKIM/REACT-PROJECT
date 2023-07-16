import { gql, useQuery } from "@apollo/client";
import BoardsWriteContainer from "../../../../src/components/units/board/write/BoardWriter.container";
import { useRouter } from "next/router";

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

export default function BoardEditPage() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardid
    }
  })
  return <BoardsWriteContainer isEdit={true} data={data}/>
  
}