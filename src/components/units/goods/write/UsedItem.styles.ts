import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export const Wrapper = styled.form`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 34px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Writer = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Label = styled.h3`
  padding-bottom: 16px;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  cursor: pointer;
  color: white;
`;

export const GPSWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const GPSInput = styled.input`
  width: 200px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`

export const AddressWrapper = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 40px;
`

export const AddressSection = styled.section`
  display: flex;
  flex-direction: column;
`

export const MapSection = styled.section`
  width: 500px;
  margin-left: 48px;
`

export const Address = styled.input`
  width: 448px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  margin-bottom: 2px;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const ImageBox = styled.div`
  display: flex;
`

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  background-color:  "gray";
  :hover {
    background-color: #fa6400;
  }
`;

export const Error = styled.div`
  margin-top: 10px;
  padding-left: 16px;
  color : red;
  font-size: 15px;
`

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcode)``;