import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation
      centeredSlides={true}
      pagination={{ clickable: true }}
      breakpoints={{
        // When window width is >= 640px
        // 640: {
        //   slidesPerView: 2,
        // },
        // When window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // When window width is >= 1024px
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[Pagination, Autoplay, Navigation]}
    >
      <SwiperSlide className="flex h-[200px] w-[200px] items-center justify-center bg-purple-dark">
        Slide 1
      </SwiperSlide>
      <SwiperSlide className="flex h-[200px] w-[200px] items-center justify-center bg-purple-dark">
        Slide 2
      </SwiperSlide>
      <SwiperSlide className="flex h-[200px] w-[200px] items-center justify-center bg-purple-dark">
        Slide 3
      </SwiperSlide>
      <SwiperSlide className="flex h-[200px] w-[200px] items-center justify-center bg-purple-dark">
        Slide 4
      </SwiperSlide>
      <SwiperSlide className="flex h-[200px] w-[200px] items-center justify-center bg-purple-dark">
        Slide 5
      </SwiperSlide>
      <SwiperSlide className="flex h-[200px] w-[200px] items-center justify-center bg-purple-dark">
        Slide 6
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
