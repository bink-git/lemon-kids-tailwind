import React, { useState } from "react";
import plus from "../../assets/plus.svg";
import xmark from "../../assets/xmark.svg";
import "animate.css";

const Question = ({ qusestion, answer, id, toggle, activeId }) => {
  const isActive = id === activeId;

  return (
    <>
      <header
        onClick={() => toggle(id)}
        className="flex cursor-pointer justify-between gap-4 border-b-[3px] border-[#f2f2f2] py-4"
      >
        <h4
          className={
            isActive
              ? "text-md font-bold text-orange"
              : "text-md font-bold text-purple-dark"
          }
        >
          {qusestion}
        </h4>
        <img src={isActive ? xmark : plus} alt="icon" />
      </header>
      {isActive && (
        <>
          <p className="animate__animated animate__fadeIn answer p-4 text-justify text-base text-purple-dark">
            {answer}
          </p>
          <div className="border-b-[3px] border-[#f2f2f2]"></div>
        </>
      )}
    </>
  );
};

export default Question;
