import React, { FC } from "react";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import styled from "styled-components";

import BaseInputBox, { BaseInputBoxProps } from "./BaseInputBox";
import { BaseStyleInput } from "./BaseInputBox.styled";

const StyledPhoneInputBox = styled(PhoneInput)`
  .PhoneInput {
    position: relative;

    background: red;
  }

  & .PhoneInputCountry {
    z-index: 1;
    left: 16px;
    height: 40px;
  }

  & input {
    ${BaseStyleInput}
    position: absolute;
    padding-left: 70px;
  }
`;

export interface PhoneInputBoxProps extends BaseInputBoxProps {
  countryOptionsOrder?: string[];
  defaultCountry?: string;
}

const PhoneInputBox: FC<PhoneInputBoxProps> = ({
  value,
  onChange,
  countryOptionsOrder,
  defaultCountry,
  ...inputProps
}) => {
  return (
    <BaseInputBox {...inputProps}>
      <StyledPhoneInputBox
        withCountryCallingCode={true}
        countryOptionsOrder={countryOptionsOrder}
        defaultCountry={defaultCountry}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </BaseInputBox>
  );
};

export default PhoneInputBox;
