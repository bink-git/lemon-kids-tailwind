import React from "react";

const ButtonPrimary = ({ children, disabled, type, onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="btn-about btn-subscribe cursor-pointer rounded-[60px] bg-purple  px-9 py-[18px]
       text-lg font-bold text-white transition hover:bg-purple-light active:bg-yellow disabled:pointer-events-none disabled:cursor-none disabled:bg-gray"
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
