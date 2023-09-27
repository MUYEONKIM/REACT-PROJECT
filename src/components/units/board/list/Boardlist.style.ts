import { LikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Card } from "antd";

interface ITextToken {
  isMatched : boolean
}

export const Wrapper = styled.div`
  width: 1000px;
  margin: 100px;
`;

export const BestWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
`

export const BestBoardImg = styled.img`
  max-width: 240px;
  max-height: 140px;
  min-height: 140px;

`
export const LikeIcon = styled(LikeOutlined)`
  font-size: 20px;
  color: #ffd600;
  cursor: pointer;
`;

export const BestSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`

export const BoardP = styled.p`
  margin-top: 3px;
`

export const BestContent = styled.div`

`

export const BestBoardCard = styled(Card)`
  width: 240PX;
`

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;

export const TextToken = styled.span`
  color: ${(props: ITextToken) => (props.isMatched ? "red" : "black")};
`;