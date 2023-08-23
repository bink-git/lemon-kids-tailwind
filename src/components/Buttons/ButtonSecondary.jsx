import React from 'react';
import styled from 'styled-components';

const ButtonSecondary = ({ children }) => {
  return <ButtonStyled type="button">{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  background-color: transparent;
  color: var(--clr-primary-1);
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: var(--text-lg);
  border-radius: 60px;
  display: inline-flex;
  padding: 17px 37px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 4px solid var(--clr-primary-1);
  cursor: pointer;

  &:hover {
    color: #ffd500;
    border: 4px solid #ffd500;
  }

  &:active {
    color: #ffd500;
    border: 4px solid #ffd500;
  }
`;

export default ButtonSecondary;
