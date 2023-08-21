import React, { useState } from "react";
import check from "../assets/check.svg";
import checkActive from "../assets/check-active.svg";
import styled from "styled-components";

const Adantage = ({ title, id, toggle, activeId }) => {
  const isActive = id === activeId;

  return (
    <Wrapper>
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
        <p>{title}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  p {
    color: var(--5-d-2-b-6-f, #5d2b6f);
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 36px */
  }
`;

export default Adantage;
