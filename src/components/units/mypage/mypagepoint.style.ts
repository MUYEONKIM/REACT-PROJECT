import styled from "@emotion/styled";

export const PointWrapper = styled.section`
  padding: 20px;
  border-radius: 35px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const PointTitle = styled.h1`
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 100px;
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
`;

export const ColumnHeaderBasic = styled.div`
  width: 30%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 50%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 30%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ColumnTitle = styled.div`
  width: 50%;
  text-align: center;
`;
