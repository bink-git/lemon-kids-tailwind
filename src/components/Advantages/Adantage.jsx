import React, { useState } from "react";
import check from "../../assets/check.svg";
import checkActive from "../../assets/check-active.svg";

const Adantage = ({ title, id, toggle, activeId }) => {
  const isActive = id === activeId;

  return (
    <div
      className={isActive ? "advantage bg-white drop-shadow-xl" : "advantage"}
      onClick={() => toggle(id)}
    >
      <img
        src={isActive ? checkActive : check}
        width={50}
        height={50}
        alt="check icon"
      />
      <p className="text-xl font-bold text-purple-dark 2xl:text-2xl">{title}</p>
    </div>
  );
};

export default Adantage;
