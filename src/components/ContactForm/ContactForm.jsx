import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Subtitle from '../Subtitle';
import Title from '../Title';
import ButtonPrimary from '../ButtonPrimary';
import girl from '../../assets/girl.jpg';
import { useGlobalContext } from '../../context';

import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationSchema';

import PhoneNumberInput from '../PhoneNumberInput';
import Modal from '../Modal';

const ContactForm = () => {
  const { openModal, isSuccess, setIsSuccess } = useGlobalContext();

  const {
    register,
    control,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      textarea: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const watchAllFields = watch(['name', 'email', 'phone', 'textarea']);

  const onSubmit = (data) => {
    console.log(data);
    setIsSuccess(true);
    openModal();
    reset({
      name: '',
      email: '',
      phone: '',
      textarea: '',
    });
  };

  return (
    <Wrapper>
      <div className="container contact-form">
        <div className="form-info">
          <Subtitle>зворотна форма</Subtitle>
          <Title>Залишились питання? Або бажаєте зворотній дзвінок?</Title>
          <p className="descr">
            Зв'яжіться з нами у будь-який час, і ми будемо раді відповісти на
            ваші запитання. Заповніть форму, щоб надіслати нам email. Ми
            відповімо або передзвонимо найближчим часом.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputs">
              <div className="input-group">
                <div className="input input-name">
                  <label htmlFor="name">ПІБ</label>
                  <input
                    type="text"
                    placeholder="Введіть ваші ПІБ"
                    id="name"
                    {...register('name', { required: true })}
                  />
                  <p className="error">{errors.name?.message}</p>
                </div>

                <div className="input input-email">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Введіть вашу електронну пошту"
                    id="email"
                    {...register('email', {
                      required: true,
                    })}
                  />
                  <p className="error">{errors.email?.message}</p>
                </div>

                <div className="input-phone">
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <>
                        <PhoneNumberInput
                          name={field.name}
                          label="Телефон"
                          onChange={field.onChange}
                          value={field.value}
                        />
                        <p className="error">{errors.phone?.message}</p>
                      </>
                    )}
                  />
                </div>
              </div>
              <div className="textarea">
                <label htmlFor="textarea">Коментар</label>
                <textarea
                  id="textarea"
                  placeholder="Введіть текст"
                  {...register('textarea', {
                    required: true,
                  })}
                ></textarea>
                <p className="error">{errors.textarea?.message}</p>
              </div>
            </div>
            <button
              className="btn-form"
              type="submit"
              disabled={
                !watchAllFields.every(Boolean) || watch('textarea').length < 10
              }
            >
              Надіслати нам своє питання
            </button>
          </form>
        </div>
        <div className="form-img">
          <img src={girl} alt="girl" />
        </div>
        {isSuccess && <Modal />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100%;
  background-image: url('./main-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .contact-form {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }

  .form-info {
    padding: 90px 50px 70px 50px;

    .descr {
      color: var(--clr-text);
      font-size: var(--text-base);
      font-weight: 600;
      line-height: normal;
      margin-bottom: 24px;
    }

    .inputs {
      display: flex;
      justify-content: space-between;
      margin-bottom: 57px;
    }

    .input-group {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      max-width: 420px;
      width: 100%;
    }

    label {
      color: var(--clr-primary-1);
      font-size: var(--text-base);
      font-weight: 600;
      line-height: 18px; /* 112.5% */
      display: block;
      margin-bottom: 3px;
    }

    input {
      width: 100%;
      height: 40px;
      flex-grow: 1;
    }

    textarea {
      width: 330px;
      height: 130px;
      resize: none;
    }

    input,
    textarea {
      font-family: 'Open Sans', sans-serif;
      font-size: var(--text-base);
      font-weight: 400;
      color: var(--clr-text);
      padding: 8px;
      border-radius: 10px;
      border: 1px solid var(--grey-border, #b9bcc3);
      background: var(--white, #fff);
    }

    input::placeholder,
    textarea::placeholder {
      font-family: 'Open Sans', sans-serif;
      color: #777b82;
      font-size: var(--text-base);
      font-style: normal;
      font-weight: 400;
    }

    input:focus,
    textarea:focus {
      outline: 2px solid var(--clr-primary-1);
    }
  }

  .error {
    color: red;
    font-size: small;
    margin-bottom: 20px;
  }

  .form-img img {
    height: 100%;
    object-fit: fill;
  }
  .btn-form {
    width: 100%;
    background-color: var(--clr-primary-1);
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: var(--text-lg);
    line-height: 100%;
    border-radius: 60px;
    padding: 17px 37px;
    border: none;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &:hover {
      background-color: #e4cdf6;
    }

    &:active {
      background-color: #ffd500;
    }

    &:disabled {
      background-color: #eae5ee;
      pointer-events: none;
      cursor: not-allowed;
    }
  }
`;

export default ContactForm;
