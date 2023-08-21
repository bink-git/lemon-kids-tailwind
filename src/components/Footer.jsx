import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import ButtonPrimary from './ButtonPrimary';

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer container">
        <div className="footer-img">
          <img src={logo} alt="main logo" width={378} />
        </div>

        <div className="footer-info">
          <div className="footer-subscribe">
            <h3>Будьте в курсі нашої історії</h3>
            <p>
              Приєднуйтесь і будьте першим, хто дізнається про останні новини
              про тренди, акції та багато іншого!
            </p>
            <form>
              <label htmlFor="email">Email</label>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Введіть вашу електронну пошту"
                  id="email"
                />
                <ButtonPrimary className="btn-subscribe">
                  Приєднатись
                </ButtonPrimary>
              </div>
            </form>
          </div>
          <div className="footer-nav">
            <nav>
              <ul>
                <li>
                  <a href="#">Про компанію</a>
                </li>
                <li>
                  <a href="#">Відгуки</a>
                </li>
                <li>
                  <a href="#">Питання</a>
                </li>
                <li>
                  <a href="#">Політика конфіденційності</a>
                </li>
                <li>
                  <a href="#">Правила та умови</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <p className="footer-copy">
          © 2023 <span>Lemon Kids</span>. Усі права захищені
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #fdf4eb;
  padding: 50px;

  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 60px;
  }

  .footer {
    padding-inline: 50px;
  }

  .footer-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 38px;
  }

  .footer-subscribe {
    display: flex;
    flex-direction: column;
    max-width: 490px;

    h3 {
      color: var(--clr-primary-1);
      font-size: 34px;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 28px;
    }

    p {
      color: var(--clr-primary-1);
      font-family: Open Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 180%; /* 32.4px */
      margin-bottom: 25px;
    }

    label {
      color: var(--clr-primary-1);
      font-size: 16px;
      font-weight: 600;
      line-height: 18px; /* 112.5% */
      display: block;
      margin-bottom: 3px;
    }

    input {
      width: 100%;
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      font-weight: 400;
      color: var(--clr-text);
      padding: 8px;
      border-radius: 10px;
      border: 1px solid var(--grey-border, #b9bcc3);
      background: var(--white, #fff);
    }

    input::placeholder {
      font-family: 'Open Sans', sans-serif;
      color: #777b82;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
    }

    input:focus {
      outline: 2px solid var(--clr-primary-1);
    }
  }

  .input-group {
    display: flex;
    gap: 15px;
  }

  .btn-subscribe {
    width: 148px;
    height: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: 600;
  }

  .footer-nav {
    li {
      color: var(--clr-primary-1);
      font-family: Open Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 34px; /* 170% */
      margin-bottom: 15px;
    }

    li a:hover {
      color: var(--clr-primary-2);
    }
  }

  .footer-copy {
    color: var(--clr-primary-1);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    span {
      color: var(--clr-primary-2);
    }
  }
`;

export default Footer;
