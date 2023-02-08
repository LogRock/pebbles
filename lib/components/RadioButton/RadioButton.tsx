import uniqueId from "lodash.uniqueid";
import React, { FC, InputHTMLAttributes } from "react";
import { RadioButtonContainer, RadioButtonInput } from "./RadioButton.styled";
import { spacingTokens } from "../../types/tokens";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  spaceAfter?: spacingTokens;
}

const RadioButton: FC<RadioButtonProps> = ({
  children,
  checked,
  spaceAfter,
  id,
  ...props
}) => {
  const newID = id || uniqueId("logrock_pebbles_radiobutton");

  return (
    <RadioButtonContainer spaceAfter={spaceAfter}>
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
