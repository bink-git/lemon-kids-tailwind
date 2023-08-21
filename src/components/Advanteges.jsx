import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './Title';
import { advantages } from '../data.js';

import Adantage from './Adantage';

const Advanteges = () => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <Wrapper>
      <Title>Наші основні цінності</Title>
      <div className="advantages">
        {advantages.map((advantage) => {
          return (
            <Adantage
              {...advantage}
              activeId={activeId}
              toggle={toggle}
              key={advantage.id}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 100px 90px;

  h2 {
    text-align: center;
    margin-bottom: 60px;
  }

  .advantages {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 60px;
  }
`;

export default Advanteges;
