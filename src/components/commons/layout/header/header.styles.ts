import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 152px;
  background-color: #f5f2fc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: #5729ff;
  cursor: pointer;
`;

export const InnerButton = styled.span`
  margin: 10px;
  color: #5729ff;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const Profile = styled.section`
  display: flex;
  flex-direction: row;
  border-bottom: 1.5px solid;
  padding: 10px;
`

export const ProfileFunction = styled.section`
  display: flex;
  flex-direction: row;
  padding: 10px;
`

export const ProfileSpan = styled.span`
  margin-left: 18px;
`