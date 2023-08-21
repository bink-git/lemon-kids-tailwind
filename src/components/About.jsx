import React from "react";
import Advanteges from "./Advanteges";
import team from "../assets/team.png";
import styled from "styled-components";
import smallCheck from "../assets/check-small.svg";
import ButtonPrimary from "./ButtonPrimary";
import Title from "./Title";
import Subtitle from "./Subtitle";

const About = () => {
  return (
    <>
      <div className="container-2xl mx-auto w-full max-w-screen-2xl" id="about">
        <div className="light-bg"></div>
        <div className="about container">
          <div className="about-img">
            <img src={team} alt="team photo" />
          </div>
          <div className="about-info ">
            <Subtitle>Давайте знайомитися</Subtitle>
            <Title>Хто ми?</Title>
            <div className="descr">
              <p>
                Таким чином, початок повсякденної роботи з формування позиції
                значною мірою зумовлює створення форм розвитку. Значимість цих
                проблем настільки очевидна, що консультація із широким активом
                відіграє важливу роль у формуванні форм розвитку.
              </p>
              <p>
                Так само постійне інформаційно-пропагандистське забезпечення
                нашої діяльності вимагають визначення та уточнення суттєвих
                фінансових та адміністративних умов. Ідейні міркування вищого
                порядку, а також рамки та місце навчання кадрів відіграє важливу
                роль у формуванні форм розвитку.
              </p>
            </div>
            <div className="instagram">
              <img src={smallCheck} alt="check icon" />
              <p>
                Наша сторінка в{" "}
                <span>
                  <a href="https://www.instagram.com/" target="_blank">
                    Instagram
                  </a>
                </span>
              </p>
            </div>
            <ButtonPrimary className="btn-about">Подивитись</ButtonPrimary>
          </div>
        </div>
      </div>
      <div className="container">
        <Advanteges />
      </div>
    </>
  );
};

const Wrapper = styled.section`
  padding: 90px 50px 0px 50px;
  position: relative;
  display: flex;
  gap: 60px;

  .light-bg {
    background-color: #fdf4eb;
    height: 217px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .about {
    display: flex;
    gap: 60px;
    padding-inline: 50px;
  }

  .about-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .descr {
      margin-bottom: 56px;
      color: var(--clr-text);
      font-size: var(--text-lg);
      font-style: normal;
      font-weight: 400;
      line-height: 26px; /* 144.444% */
      margin-bottom: 20px;
    }
  }

  .instagram {
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    img {
      margin-right: 24px;
    }

    p {
      color: var(--clr-text);
      font-size: var(--text-xl);
      font-style: normal;
      font-weight: 400;
      margin: 0;
    }

    a {
      color: var(--clr-primary-2);
      font-family: Open Sans;
      font-size: var(--text-xl);
      font-weight: 700;
      line-height: 26px;
      text-decoration: none;
      &:hover {
        border-bottom: 1px solid var(--clr-primary-2);
      }
    }
  }

  .btn-about {
    align-self: self-start;
  }
`;

export default About;
