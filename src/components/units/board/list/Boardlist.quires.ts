import { gql } from "@apollo/client";

export const FetchBoards = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      createdAt
  # 특정페이지만 불러오기 할때
  # query fetchBoards{
  #   fetchBoards(page: 3) {
  #     _id
  #     writer
  #     title
  #     createdAt
  #   }
  # }
    }
  }
` 

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`