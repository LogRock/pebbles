import uniqueId from "lodash.uniqueid";
import React, { FC, InputHTMLAttributes } from "react";
import {
  RadioButtonContainer,
  RadioButtonInput,
  RadioButtonMarker,
  RadioButtonRadio,
} from "./RadioButton.styled";

const RadioButton: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  checked,
  id,
  ...props
}) => {
  const newID = id || uniqueId("logrock_pebbles_radiobutton");

  return (
    <RadioButtonContainer>
      <RadioButtonInput
        type="radio"
        {...props}
        id={newID}
        checked={checked}
      ></RadioButtonInput>
      <RadioButtonRadio checked={checked}>
        {checked && <RadioButtonMarker />}
      </RadioButtonRadio>
      <label htmlFor={newID}>{children}</label>
    </RadioButtonContainer>
  );
};

export default RadioButton;
