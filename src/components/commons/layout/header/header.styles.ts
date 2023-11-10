import styled from "@emotion/styled";

interface Isubmit {
  isActive: boolean;
}

export const Wrapper = styled.div`
  height: 152px;
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
  color: #fa6400;
  cursor: pointer;
`;

export const InnerButton = styled.span`
  margin: 10px;
  color: #5729ff;
  cursor: pointer;
`;

export const SpanSection = styled.section`
  display: flex;
  align-items: center;
`;

export const HeaderSpan = styled.span`
  font-size: 16px;
  font-weight: bold;
  font-family: "live";
  color: #fa6400;
  margin-right: 25px;
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
`;

export const ProfileFunction = styled.section`
  display: flex;
  flex-direction: row;
  padding: 10px;
  cursor: pointer;
`;

export const ProfileSpan = styled.span`
  margin-left: 18px;
`;

export const Profilecontent = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ModalSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalIcon = styled.img`
  width: 120.07px;
  margin-top: 50px;
`;

export const ModalHeader = styled.h1`
  margin-top: 50px;
`;

export const ModalInput = styled.input`
  border: none;
  border-bottom: 2px solid;
  font-size: 16px;
  font-weight: 500;
  width: 80%;
  height: 5vh;
  margin-top: 50px;
`;

export const ModalButton = styled.button`
  border: none;
  font-size: 16px;
  font-weight: 900;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  color: white;
  border-radius: 15px;
  width: 80%;
  height: 5vh;
  background-color: ${(props: Isubmit) =>
    props.isActive ? "#FFD600" : "#BDBDBD"};
  margin-top: 50px;
`;
