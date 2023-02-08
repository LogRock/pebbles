import React, { FC } from "react";
import { CheckMark, Input, Label, LabelContent } from "./CheckBox.styled";
import { CheckBoxProps } from "./CheckBox.types";

const CheckBox: FC<CheckBoxProps> = ({
  children,
  spaced,
  spaceAfter,
  ...inputProps
}) => {
  return (
    <Label
      disabled={inputProps.disabled}
      spaced={spaced}
      spaceAfter={spaceAfter}
      htmlFor={inputProps.id}
    >
      <LabelContent>{children}</LabelContent>
      <Input
        type="checkbox"
        {...inputProps}
        disabled={inputProps.disabled}
        id={inputProps.id}
      />
      <CheckMark disabled={inputProps.disabled} />
    </Label>
  );
};

export default CheckBox;
