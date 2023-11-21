import {
  ProfileOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 1000px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  margin-top: 200px;
  border-radius: 5% 5% 0 0;
`;

export const WrapperTitle = styled.p`
  font-size: 32px;
  color: white;
`;

export const WrapperContent = styled.h1`
  color: bisque;
  text-align: center;
`;

export const ItemsWrapper = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 650px;
  background-color: white;
`;

export const Content = styled.div`
  padding: 20px;
  width: 470px;
  height: 400px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1, 1.1);
    -ms-transform: scale(1.05, 1.05);
    -webkit-transform: scale(1.05, 1.05);
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  }
`;

export const Title = styled.h1``;

const fontsize = "50px";

export const BoardIcon = styled(ProfileOutlined)`
  font-size: ${fontsize};
  color: orange;
`;

export const MarketIcon = styled(ShoppingCartOutlined)`
  font-size: ${fontsize};
  color: orange;
`;

export const MypageIcon = styled(UserOutlined)`
  font-size: ${fontsize};
  color: orange;
`;

export const Line = styled.div`
  border-right: 3px dashed orange;
  height: 80%;
`;

export const Explain = styled.p``;
