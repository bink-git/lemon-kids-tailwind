import React from "react";

const Title = ({ children }) => {
  return (
    <h2 className="mb-8 text-center text-4xl font-extrabold text-purple sm:px-10 2xl:text-5xl">
      {children}
    </h2>
  );
};

export default Title;
