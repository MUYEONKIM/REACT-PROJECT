import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 1200px;
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Table = styled.article`
  margin-top: 100px;
  width: 823.64px;
  height: 800px;
  border-radius: 20px;
  overflow: auto;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PickedTitle = styled.h1`
  width: 100%;
  position: sticky;
  top: 0px;
  background-color: white;
  height: 10%;
  padding: 20px;
`;

export const GoodsTable = styled.article`
  padding: 20px;
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

export const SubmitButton = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family:
    system-ui,
    -apple-system,
    system-ui,
    "Helvetica Neue",
    Helvetica,
    Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover,
  &:focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;
