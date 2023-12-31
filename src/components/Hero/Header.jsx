import React from "react";
import logo from "../../assets/logo.svg";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const links = [
  {
    text: "Про компанію",
    href: "#about",
  },
  {
    text: "Відгуки",
    href: "#reviews",
  },
  {
    text: "Питання",
    href: "#faq",
  },
];

const Header = () => {
  return (
    <div className="container-2xl mx-auto mb-12 flex w-full max-w-screen-2xl flex-col items-center justify-between gap-8 px-4 py-8 lg:flex-row lg:px-10 2xl:px-12 2xl:pb-24">
      <div>
        <a href="#">
          <img src={logo} alt="main logo" className="w-60" />
        </a>
      </div>
      <nav className="lg:flex-1">
        <ul className="flex  gap-x-4 ">
          {links.map((link) => (
            <li className="text-purple hover:text-orange" key={link.text}>
              <a
                href={link.href}
                className="text-lg font-semibold tracking-wide"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ButtonPrimary>Зв’яжіться з нами</ButtonPrimary>
    </div>
  );
};

export default Header;
