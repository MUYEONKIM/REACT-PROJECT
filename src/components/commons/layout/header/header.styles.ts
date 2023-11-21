import styled from "@emotion/styled";

interface Isubmit {
  isActive: boolean;
}

interface IMainPage {
  isMain: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: ${(props: IMainPage) => (props.isMain ? "100vh" : "552px")};
  min-height: ${(props: IMainPage) => (props.isMain ? "1080px" : "552px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid;
  background-image: url("/backgroundImage/background_main.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  /* filter: saturate(20%); */
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  height: 152px;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 0 300px 0 300px;
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
  font-size: 22px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
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
