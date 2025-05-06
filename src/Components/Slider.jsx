import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="/img.jpg" alt="" />
      </div>
      <div>
        <img src="/img.jpg" alt="" />
      </div>
      <div>
        <img src="/img.jpg" alt="" />
      </div>
      <div>
        <img src="/img.jpg" alt="" />
      </div>
      <div>
        <img src="/img.jpg" alt="" />
      </div>
    </Slider>
  );
};

export default Slide;
