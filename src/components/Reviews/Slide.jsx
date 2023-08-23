import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import stars from "../../assets/stars.svg";
import commentDots from "../../assets/slide-dots-icon.svg";

const Slide = ({ path }) => {
  return (
    <div className="flex">
      <img src={path} alt="slide photo" className="slide-img" />
      <div className="slide-content relative h-full">
        <div className="flex items-center">
          <img src={stars} alt="stars rating" />
          <span className="ml-3 text-xs text-[#888]">5.0 rating</span>
        </div>
        <div className="slide-comment">
          <p className="my-4 text-sm/tight font-semibold text-purple-dark">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
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
          <p className="text-xs  text-purple-dark">Legacy Solutions Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
