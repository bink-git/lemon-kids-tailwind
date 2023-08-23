import React, { useState } from "react";
import { faqs } from "../../data.js";
import Subtitle from "../Text/Subtitle.jsx";
import Title from "../Text/Title.jsx";
import Question from "./Question.jsx";

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <section
      className="faq container-2xl relative mx-auto w-full max-w-[800px] px-4 pb-8 2xl:py-24"
      id="faq"
    >
      <Subtitle>Питання та відповіді</Subtitle>
      <Title>Наші відповіді на частіщі запитання</Title>
      <div className="border-t-[3px] border-[#f2f2f2]">
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
    </section>
  );
};

// const Wrapper = styled.section`
//

//   p {
//     text-align: center;
//     margin-bottom: 22px;
//   }

//   h2 {
//     text-align: center;
//     margin-bottom: 60px;
//   }
// `;

export default Faq;
