import React, { useRef, useState } from "react";
import styled from "styled-components";
import Subtitle from "../Text/Subtitle.jsx";
import Title from "../Text/Title.jsx";
import rectPurp from "../../assets/rect-purple.svg";
import rectOrange from "../../assets/rect-orange.svg";
import stars from "../../assets/stars.svg";
import commentDots from "../../assets/slide-dots-icon.svg";
import slide1 from "../../assets/slide-1.png";
import slide2 from "../../assets/slide-2.png";
import slide3 from "../../assets/slide-3.png";
import slide4 from "../../assets/slide-4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./slider.css";
import SwiperSlider from "./SwiperSlider.jsx";

const slides = [
  { id: 1, path: slide1 },
  { id: 2, path: slide2 },
  { id: 3, path: slide3 },
  { id: 4, path: slide4 },
  { id: 5, path: slide1 },
];

const Reviews = () => {
  return (
    <div
      className="container-2xl mx-auto w-full max-w-screen-2xl items-center px-4 py-8"
      id="reviews"
    >
      <Subtitle className="sub-center">Експертна думка користувачів</Subtitle>
      <Title>Відгуки батьків та педагогів</Title>
      <div className="relative mx-auto flex h-[400px] w-full items-center justify-center">
        {/* <img
          src={rectPurp}
          alt="rect"
          className="absolute bottom-[30%] left-[30%]"
        />
        <img
          src={rectOrange}
          alt="rect"
          className="absolute right-[32%] top-[-40px]"
        /> */}

        {/* <Swiper
          slidesPerView={3}
          // spaceBetween={20}
          centeredSlides={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide className="swiper-slide" key={slide.id}>
                <img src={slide.path} alt="slide photo" className="slide-img" />
                <div className="slide-content relative h-full">
                  <div className="flex items-center">
                    <img src={stars} alt="stars rating" />
                    <span className="ml-3 text-xs text-[#888]">5.0 rating</span>
                  </div>
                  <div className="slide-comment">
                    <p className="my-4 text-sm/tight font-semibold text-purple-dark">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </p>
                    <img
                      src={commentDots}
                      alt="icon"
                      className="absolute right-[-35px] top-[10px]"
                    />
                  </div>
                  <div className="slide-author">
                    <p className="text-base/4 font-semibold text-purple-dark">
                      Elisa Grant
                    </p>
                    <p className="text-xs  text-purple-dark">
                      Legacy Solutions Engineer
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper> */}
        <SwiperSlider />
      </div>
    </div>
  );
};

export default Reviews;
