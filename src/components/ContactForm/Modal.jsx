import React from "react";
import Title from "../Text/Title";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import styled from "styled-components";
import { useGlobalContext } from "../../context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <Wrapper>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container ">
          <Title>Повідомлення успішно надіслано!</Title>
          <p>
            Незабаром наші працівники зв'яжуться з вами за вибраним вами
            способом
          </p>
          <ButtonPrimary className="btn-about" onClick={() => closeModal()}>
            Дякую!
          </ButtonPrimary>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    visibility: hidden;
    z-index: -1;
  }
  /* OPEN/CLOSE MODAL */
  .show-modal {
    visibility: visible;
    z-index: 10;
  }
  .modal-container {
    background-color: white;
    border-radius: 30px;
    width: 80vw;
    height: 70vh;
    max-width: 1100px;
    text-align: center;
    display: grid;
    place-items: center;
    position: relative;
    padding: 50px;
  }
  p {
    color: var(--clr-text);
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 75px;
  }
`;

export default Modal;
