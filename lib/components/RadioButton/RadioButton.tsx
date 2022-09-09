import uniqueId from "lodash.uniqueid";
import React, { FC, InputHTMLAttributes } from "react";
import { RadioButtonContainer, RadioButtonInput } from "./RadioButton.styled";

const RadioButton: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  checked,
  id,
  ...props
}) => {
  const newID = id || uniqueId("logrock_pebbles_radiobutton");

  return (
    <RadioButtonContainer>
      <label htmlFor={newID}>
        <RadioButtonInput
          type="radio"
          {...props}
          id={newID}
          checked={checked}
          name="radio-button"
        />
        {children}
      </label>
    </RadioButtonContainer>
  );
};

export default RadioButton;
