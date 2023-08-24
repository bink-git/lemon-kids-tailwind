import React, { useState } from "react";
import styled from "styled-components";
import Title from "../Text/Title";
import { advantages } from "../../data.js";

import Adantage from "./Adantage";

const Advanteges = () => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <section className="advantages px-4 py-8 xl:py-12">
      <Title>Наші основні цінності</Title>
      <div className="flex flex-wrap items-center justify-center gap-8 2xl:gap-[60px]">
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
    </section>
  );
};

const Wrapper = styled.section`
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
