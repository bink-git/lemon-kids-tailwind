import React from "react";
import team from "../../assets/team.png";
import smallCheck from "../../assets/check-small.svg";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import Title from "../Text/Title";
import Subtitle from "../Text/Subtitle";

const About = () => {
  return (
    <div className="bg-beige-light">
      <section
        className="about container-2xl relative mx-auto mb-10 w-full max-w-screen-2xl px-4 pb-6 xl:px-8"
        id="about"
      >
        <div className="absolute left-0 top-0 -z-10 h-[220px] w-full  "></div>
        <div className="about flex flex-col justify-center lg:flex-row lg:gap-10">
          <div className="mx-auto p-4 pt-10 lg:max-w-sm  xl:max-w-full">
            <img src={team} alt="team photo" />
          </div>
          <div className="flex flex-col items-center justify-center lg:mt-10 lg:flex-1 lg:items-start lg:justify-start">
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
                Так само постійне інформаційно-пропагандистське забезпечення
                нашої діяльності вимагають визначення та уточнення суттєвих
                фінансових та адміністративних умов. Ідейні міркування вищого
                порядку, а також рамки та місце навчання кадрів відіграє важливу
                роль у формуванні форм розвитку.
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
      </section>
    </div>
  );
};

export default About;
