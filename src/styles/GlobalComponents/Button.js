import React from 'react'
import { ButtonBack, ButtonFront } from './index'
const handleButtonClick = () => {
  // Open the link in a new tab
  // window.open('https://drive.google.com/uc?export=download&id=1ZfZmEuix_6PNpS2IK28ERXqnGSegrbkP', '_blank');

  // OR trigger a file download
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/file/d/1_hAnlvJUy2xZmNDGQcn02_Sj1u8TYWh8/view?usp=sharing';
  link.download = 'CV.pdf';
  link.click();
};
const Button = (props) => {
  const { alt, download, form, disabled, onClick, children, ...rest } = props;

  return (
    <ButtonBack alt={alt} {...rest} form={form} disabled={disabled}>
      {children}
      <ButtonFront alt={alt} disabled={disabled}>
        {children}
      </ButtonFront>
    </ButtonBack>
  );
};

export default Button
