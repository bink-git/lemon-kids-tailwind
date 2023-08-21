import React, { forwardRef, useState } from 'react';
import { PhoneInput, CountrySelector } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useGlobalContext } from '../context';

const PhoneNumberInput = ({ name, label, onChange, value }) => {
  console.log(value);
  const [phone, setPhone] = useState('');
  const { isSuccess, closeModal } = useGlobalContext();

  const handlePhoneChange = (value) => {
    // setPhone(value);
    onChange(value, name);
    // isSuccess && setPhone('');
  };
  return (
    <>
      <label>{label}</label>

      <PhoneInput
        name={name}
        value={value}
        onChange={handlePhoneChange}
        disableDialCodeAndPrefix={true}
        showDisabledDialCodeAndPrefix={true}
        defaultCountry="ua"
        inputStyle={{
          borderTopLeftRadius: '0px',
          borderBottomLeftRadius: '0px',
          outline: 'none',
          width: '20px',
        }}
        countrySelectorStyleProps={{
          buttonStyle: {
            height: '40px',
            border: '1px solid var(--grey-border, #b9bcc3)',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
            padding: '8px',
          },
        }}
        className="phone-input"
      />
    </>
  );
};

export default PhoneNumberInput;
