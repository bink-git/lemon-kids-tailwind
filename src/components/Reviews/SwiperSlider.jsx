import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slide from "./Slide";
import slide1 from "../../assets/slide-1.png";
import slide2 from "../../assets/slide-2.png";
import slide3 from "../../assets/slide-3.png";
import slide4 from "../../assets/slide-4.png";
import "./slider.css";

const slides = [
  { id: 1, path: slide1 },
  { id: 2, path: slide2 },
  { id: 3, path: slide3 },
  { id: 4, path: slide4 },
  { id: 5, path: slide1 },
];

const SwiperSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      speed={500}
      effect={"coverflow"}
      centeredSlides={true}
      pagination={{ clickable: true }}
      className="mySwiper"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,
      }}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      // }}
      breakpoints={{
        // When window width is >= 640px
        // 640: {
        //   slidesPerView: 2,
        // },
        // When window width is >= 768px
        // 768: {
        //   slidesPerView: 2,
        // },
        // When window width is >= 1024px
        1024: {
          slidesPerView: 2,
        },
      }}
      modules={[Pagination, Autoplay, EffectCoverflow]}
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide
            key={slide.id}
            className="swiper-slide flex h-[350px] w-[450px] items-center justify-center"
          >
            <Slide key={slide.id} path={slide.path} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperSlider;
