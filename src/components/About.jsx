import React from "react";
import team from "../assets/team.png";
import smallCheck from "../assets/check-small.svg";
import ButtonPrimary from "./ButtonPrimary";
import Title from "./Title";
import Subtitle from "./Subtitle";

const About = () => {
  return (
    <div
      className="container-2xl relative mx-auto w-full max-w-screen-2xl px-4 pb-8"
      id="about"
    >
      <div className="absolute left-0 top-0 -z-10 h-[220px] w-full bg-beige-light "></div>
      <div className="about flex flex-col justify-center">
        <div className="about-img p-4 pt-10">
          <img src={team} alt="team photo" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Subtitle>Давайте знайомитися</Subtitle>
          <Title>Хто ми?</Title>
          <div className="descr">
            <p className="text-justify text-lg text-purple-dark">
              Таким чином, початок повсякденної роботи з формування позиції
              значною мірою зумовлює створення форм розвитку. Значимість цих
              проблем настільки очевидна, що консультація із широким активом
              відіграє важливу роль у формуванні форм розвитку.
            </p>
            <br />
            <p className="text-justify text-lg text-purple-dark">
              Так само постійне інформаційно-пропагандистське забезпечення нашої
              діяльності вимагають визначення та уточнення суттєвих фінансових
              та адміністративних умов. Ідейні міркування вищого порядку, а
              також рамки та місце навчання кадрів відіграє важливу роль у
              формуванні форм розвитку.
            </p>
          </div>
          <div className="my-10 flex items-center">
            <img className="mr-6" src={smallCheck} alt="check icon" />
            <p className="text-xl font-normal text-purple-dark">
              Наша сторінка в{" "}
              <span>
                <a
                  href="https://www.instagram.com/"
                  className="font-bold text-orange   hover:text-purple"
                  target="_blank"
                >
                  Instagram
                </a>
              </span>
            </p>
          </div>
          <ButtonPrimary>Подивитись</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default About;
