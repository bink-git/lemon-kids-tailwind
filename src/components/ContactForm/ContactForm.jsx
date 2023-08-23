import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Subtitle from "../Text/Subtitle";
import Title from "../Text/Title";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import girl from "../../assets/girl.jpg";
import { useGlobalContext } from "../../context";

import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validationSchema";

import PhoneNumberInput from "../PhoneNumberInput";
import Modal from "./Modal";

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
      name: "",
      email: "",
      phone: "",
      textarea: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const watchAllFields = watch(["name", "email", "phone", "textarea"]);

  const onSubmit = (data) => {
    console.log(data);
    setIsSuccess(true);
    openModal();
    reset({
      name: "",
      email: "",
      phone: "",
      textarea: "",
    });
  };

  return (
    <section className="h-full bg-hero-bg bg-cover bg-center bg-no-repeat">
      <div className="contact-form container-2xl mx-auto flex w-full max-w-screen-2xl items-center px-4 py-8">
        <div className="form-info flex flex-col 2xl:px-[50px] 2xl:pb-[70px] 2xl:pt-[90px]">
          <Subtitle>зворотна форма</Subtitle>
          <Title>Залишились питання? Або бажаєте зворотній дзвінок?</Title>
          <p className="mb-6 px-5 text-base font-semibold text-purple-dark">
            Зв'яжіться з нами у будь-який час, і ми будемо раді відповісти на
            ваші запитання. Заповніть форму, щоб надіслати нам email. Ми
            відповімо або передзвонимо найближчим часом.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputs mb-14 flex flex-col items-center 2xl:flex-row 2xl:justify-between">
              <div className="input-group flex w-full max-w-[420px] flex-1 flex-col justify-between">
                <div className="input input-name">
                  <label htmlFor="name">ПІБ</label>
                  <input
                    type="text"
                    placeholder="Введіть ваші ПІБ"
                    id="name"
                    {...register("name", { required: true })}
                  />
                  <p className="error">{errors.name?.message}</p>
                </div>

                <div className="input input-email">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Введіть вашу електронну пошту"
                    id="email"
                    {...register("email", {
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
                  {...register("textarea", {
                    required: true,
                  })}
                ></textarea>
                <p className="error">{errors.textarea?.message}</p>
              </div>
              <ButtonPrimary
                className="btn-form"
                type="submit"
                disabled={
                  !watchAllFields.every(Boolean) ||
                  watch("textarea").length < 10
                }
              >
                Надіслати нам своє питання
              </ButtonPrimary>
            </div>
          </form>
        </div>
        <div className="form-img hidden">
          <img src={girl} alt="girl" />
        </div>
        {isSuccess && <Modal />}
      </div>
    </section>
  );
};

export default ContactForm;
