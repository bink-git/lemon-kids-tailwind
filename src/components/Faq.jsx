import React, { useState } from 'react';
import styled from 'styled-components';
import { faqs } from '../data.js';
import Subtitle from './Subtitle.jsx';
import Title from './Title.jsx';
import Question from './Question.jsx';

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <Wrapper id="faq">
      <Subtitle>Питання та відповіді</Subtitle>
      <Title>
        Наші відповіді на <br /> частіщі запитання
      </Title>
      <div className="faqs">
        {faqs.map((faq) => {
          return (
            <Question
              activeId={activeId}
              toggle={toggle}
              key={faq.id}
              {...faq}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-block: 90px;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;

  .faqs {
    border-top: 3px solid #f2f2f2;
  }

  p {
    text-align: center;
    margin-bottom: 22px;
  }

  h2 {
    text-align: center;
    margin-bottom: 60px;
  }
`;

export default Faq;
