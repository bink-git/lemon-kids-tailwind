import React from "react";
import logo from "../../assets/logo.svg";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const links = [
  { title: "Про компанію", href: "#" },
  { title: "Відгуки", href: "#" },
  { title: "Питання", href: "#" },
  { title: "Політика конфіденціості", href: "#" },
  { title: "Правила та умови", href: "#" },
];

const Footer = () => {
  return (
    <footer className="container-2xl mx-auto flex w-full max-w-screen-2xl flex-col items-center bg-beige-light px-4 py-8">
      <div className="footer-img mb-10">
        <img src={logo} alt="main logo" className="mx-auto w-[300px]" />
      </div>

      <div className="mb-10 flex flex-col">
        <div className="footer-subscribe flex max-w-[490px] flex-col">
          <h3 className="mb-6 text-4xl font-bold text-purple">
            Будьте в курсі нашої історії
          </h3>
          <p className="mb-8 text-lg font-semibold text-purple-dark">
            Приєднуйтесь і будьте першим, хто дізнається про останні новини про
            тренди, акції та багато іншого!
          </p>
          <form className="flex flex-col justify-center">
            <label htmlFor="email">Email</label>
            <div className="input-group mb-8 flex flex-col gap-4">
              <input
                type="email"
                placeholder="Введіть вашу електронну пошту"
                id="email"
              />
              <ButtonPrimary className="btn-subscribe w-[100px]">
                Приєднатись
              </ButtonPrimary>
            </div>
          </form>
        </div>
        <div className="footer-nav">
          <nav>
            <ul>
              {links.map((link) => (
                <li
                  className="mb-4 text-xl font-semibold text-purple hover:text-orange"
                  key={link.title}
                >
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <p className="text-center text-lg text-purple">
        © 2023 <span className="text-orange">Lemon Kids</span>. Усі права
        захищені
      </p>
    </footer>
  );
};

export default Footer;
