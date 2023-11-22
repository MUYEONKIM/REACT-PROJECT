import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined, HeartFilled } from "@ant-design/icons";
import ReactPlayer from "react-player";
import { Carousel } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
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

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: bolder;
  padding-top: 5px;
  color: #4e4e4e;
`;

export const Remarks = styled.h3`
  color: gray;
`;

export const PickCount = styled.section`
  padding-top: 20px;
  width: 100%;
  text-align: end;
  font-size: 20px;
`;

export const HeartIcon = styled(HeartFilled)`
  color: #ffd600;
  margin: 0px 20px;
  cursor: pointer;
  font-size: 24px;
`;

export const Price = styled.h1`
  padding-top: 10px;
`;

export const Contents = styled.section`
  padding-top: 40px;
`;

export const MapSection = styled.section`
  height: 640px;
  padding-top: 40px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;

export const IconWrapper = styled.div`
  text-align: center;
`;

export const Youtube = styled(ReactPlayer)`
  margin: auto;
`;

export const LikeWrapper = styled.div`
  padding-top: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LocationIcon = styled.img``;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: #ffd600;
  margin: 0px 20px;
  cursor: pointer;
`;

export const DislikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: #828282;
  margin: 0px 20px;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  color: #ffd600;
`;

export const DislikeCount = styled.div`
  color: #828282;
`;

export const LinkIcon = styled.img`
  margin-right: 10px;
`;

export const ImageCarousel = styled(Carousel)`
  margin-top: 50px;
`;

export const Image = styled.img`
  width: 996px;
  height: 480px;
  margin-bottom: 30px;
`;

export const BuySection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

export const SoldoutButton = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: gray;
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
`;

export const BuyButton = styled.button`
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
