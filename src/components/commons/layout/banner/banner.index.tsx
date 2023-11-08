import { SliderItem, Wrapper } from "./banner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/banner/banner1.png" width={"100%"} />
        </div>
        <div>
          <SliderItem src="/banner/banner2.png" width={"100%"} />
        </div>
        <div>
          <SliderItem src="/banner/banner3.png" width={"100%"} />
        </div>
        <div>
          <SliderItem src="/banner/banner4.png" width={"100%"} />
        </div>
      </Slider>
    </Wrapper>
  );
}
