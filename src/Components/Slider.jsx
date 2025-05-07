import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/slider-1.png";
import img2 from "/slider-2.jpg";
import img3 from "/slider-3.jpg";
import swiper, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Slide = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle?.current?.style?.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 3000)}s`;
  };

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   cssEase: "linear",
  // };
  return (
    // <Slider className="h-screen w-screen" {...settings}>
    //   <div
    //     role="img"
    //     aria-label="Third Slide"
    //     className="w-screen h-screen rounded-xl bg-cover bg-center"
    //     style={{ backgroundImage: `url('${img1}')` }}
    //   ></div>

    //   <div
    //     role="img"
    //     aria-label="First Slide"
    //     className="w-screen h-screen rounded-xl bg-cover bg-center"
    //     style={{ backgroundImage: `url('/slider-1.png')` }}
    //   ></div>

    //   <div
    //     role="img"
    //     aria-label="Second Slide"
    //     className="w-screen h-screen rounded-xl bg-cover bg-center"
    //     style={{ backgroundImage: `url('/slider-2.jpg')` }}
    //   ></div>
    // </Slider>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      <SwiperSlide className="h-[200px]">
        <div className="w-full h-[200px]">
          <img src={img1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" />
      </SwiperSlide>

      <div className="autoplay-progress" slot="container-end">
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default Slide;
