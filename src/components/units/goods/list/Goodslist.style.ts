import { HeartFilled, LikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Card, Checkbox } from "antd";

export const Wrapper = styled.div`
  width: 1000px;
  margin: 100px;
`;

export const BestWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const BestBoardImg = styled.img`
  max-width: 240px;
  max-height: 140px;
  min-height: 140px;
`;
export const LikeIcon = styled(LikeOutlined)`
  font-size: 20px;
  color: #ffd600;
  cursor: pointer;
`;

export const HeartIcon = styled(HeartFilled)`
  font-size: 20px;
  color: #ffd600;
  cursor: pointer;
`;

interface ITable {
  Soldout: boolean;
}

export const Table = styled.article`
  height: 700px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  filter: blur(${(props: ITable) => (props.Soldout ? "5px" : "0")});
`;

export const LikeSection = styled.section`
  display: flex;
  width: 70px;
  justify-content: space-between;
  margin-top: auto;
`;

export const BestSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const BoardRemarks = styled.p`
  color: gray;
  font-size: 0.8rem;
`;
export const BoardPrice = styled.p`
  margin-top: 5px;
  font-weight: bolder;
`;

export const BoardP = styled.p`
  margin-top: 3px;
`;

export const BestContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
`;

export const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const ItemTitle = styled.p`
  font-size: 22px;
  font-weight: bolder;
`;

export const ItemRemarks = styled.p`
  margin-top: 3px;
`;

export const ItemTags = styled.p`
  color: gray;
  margin-top: 2px;
`;
export const ItemPrice = styled.p`
  font-size: 22px;
  font-weight: bolder;
`;

export const BestBoardCard = styled(Card)`
  width: 240px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
  border-bottom: 1px solid gray;
  :hover {
    color: blue;
  }
`;

export const ColumnImg = styled.img`
  padding: 10px;
  max-width: 140px;
  min-width: 140px;
  max-height: 140px;
  min-height: 140px;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
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

export const TextToken = styled.span``;

export const SearchBarWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const soldCheck = styled(Checkbox)``;
