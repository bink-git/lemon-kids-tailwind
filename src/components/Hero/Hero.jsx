import React from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import mainImg from "../../assets/main-img-2.png";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="hero h-full bg-hero-bg bg-cover bg-center bg-no-repeat">
      <Header />
      <div className="info container-2xl mx-auto flex w-full max-w-screen-2xl items-center gap-20 px-4 pb-8 lg:px-10 2xl:px-12 2xl:pb-24">
        <div className="hero-content lg:flex-1">
          <div className="hero-title mb-11">
            <h1 className="mb-4 text-center text-6xl font-extrabold text-orange lg:text-left 2xl:text-7xl ">
              Мрія чи мета?
            </h1>
            <p className="text-center text-3xl font-extrabold text-purple lg:text-left 2xl:text-5xl">
              До якого майбутнього тягнеться ваша дитина
            </p>
          </div>
          <p className=" mb-[70px] text-center text-lg font-semibold text-purple-dark lg:text-left">
            Платформа яка допоможе вам дізнатися здібності вашої дитини, і зможе
            допомогти визначитися з тим, що ближче і подобається вашій дитині
          </p>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center lg:flex-col lg:items-start xl:flex-row 2xl:justify-between">
            <ButtonPrimary>Хочу на платформу!</ButtonPrimary>
            <ButtonSecondary>Хочу дізнатися докладніше</ButtonSecondary>
          </div>
        </div>
        <div className="main-img hidden lg:block lg:flex-1 2xl:pr-0">
          <img src={mainImg} className="w-full max-w-[635px]" alt="main img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
