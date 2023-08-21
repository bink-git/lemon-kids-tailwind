import React from "react";

const Subtitle = ({ children }) => {
  return (
    <p className="mb-2 text-center text-lg font-normal uppercase text-orange">
      {children}
    </p>
  );
};

export default Subtitle;
