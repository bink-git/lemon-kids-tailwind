import React from "react";

const Title = ({ children }) => {
  return (
    <h2 className="mb-8 text-center text-5xl font-extrabold text-purple">
      {children}
    </h2>
  );
};

export default Title;
