import React, { useState } from 'react';
import check from '../assets/check.svg';
import checkActive from '../assets/check-active.svg';
import styled from 'styled-components';

const Adantage = ({ title, id, toggle, activeId }) => {
  const isActive = id === activeId;

  return (
    <Wrapper>
      <div
        className={isActive ? 'advantage active' : 'advantage'}
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
  .advantage {
    width: 350px;
    height: 100%;
    display: flex;
    padding: 22px 30px;
    background-color: #f3efe8;
    border-radius: 110px;
    gap: 22px;
    align-items: center;
    cursor: pointer;

    p {
      color: var(--5-d-2-b-6-f, #5d2b6f);
      font-family: Open Sans;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 36px; /* 36px */
    }
  }

  .advantage.active {
    background-color: #fff;
    filter: drop-shadow(0px 3px 16px rgba(0, 0, 0, 0.1));
  }
`;

export default Adantage;
