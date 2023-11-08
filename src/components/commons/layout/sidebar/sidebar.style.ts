import styled from "@emotion/styled";

export const SideBarWrapper = styled.div`
  position: sticky;
  border: 1px solid #bdbdbd;
  width: 196;
  height: 505px;
  top: 300px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SideBarContents = styled.section`
  width: 156px;
  height: 209px;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

export const SidebarDetail = styled.section`
  margin-left: 10%;
`;

export const SideBarTitle = styled.h3`
  text-align: center;
  margin: 10%;
`;

export const SidaBarImg = styled.img`
  width: 100%;
  max-height: 90px;
  padding: 15px 35px 15px 35px;
`;

export const SideBarName = styled.h4`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 5px;
`;

export const SideBarPrice = styled.h3`
  padding: 10px 0;
  font-size: 19px;
`;

export const SideBarP = styled.p`
  text-align: end;
  margin: 5px 15px 0 15px;
  font-weight: bold;
`;

export const SideBarRemarks = styled.h4`
  color: gray;
`;
