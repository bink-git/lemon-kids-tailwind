import React, { useState } from 'react';
import styled from 'styled-components';
import plus from '../assets/plus.svg';
import xmark from '../assets/xmark.svg';
import 'animate.css';

const Question = ({ qusestion, answer, id, toggle, activeId }) => {
  const isActive = id === activeId;

  return (
    <QuestionStyled>
      <header onClick={() => toggle(id)}>
        <h4 className={isActive ? 'active' : ''}>{qusestion}</h4>
        <img src={isActive ? xmark : plus} alt="icon" />
      </header>
      {isActive && (
        <>
          <p className="animate__animated animate__fadeIn answer">{answer}</p>
          <div className="divider"></div>
        </>
      )}
    </QuestionStyled>
  );
};

const QuestionStyled = styled.div`
  header {
    padding-block: 16px;
    border-bottom: 3px solid #f2f2f2;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  h4 {
    color: var(--clr-text);
    font-size: var(--text-lg);
    font-weight: 700;
  }

  h4.active {
    color: var(--clr-primary-2);
  }

  .answer {
    color: var(--clr-text);
    font-size: var(--text-base);
    text-align: justify;
    font-weight: 400;
    padding: 16px 24px 32px 24px;
    margin: 0;
  }

  .divider {
    border-bottom: 3px solid #f2f2f2;
  }

  .animate__animated.animate__fadeIn {
    --animate-duration: 1s;
  }
`;

export default Question;
