import React, { FC } from "react";
import { CheckMark, Input, Label } from "./CheckBox.styled";
import { CheckBoxProps } from "./CheckBox.types";

const CheckBox: FC<CheckBoxProps> = ({ children, ...inputProps }) => {
  return (
    <Label disabled={inputProps.disabled}>
      {children}
      <Input type="checkbox" {...inputProps} disabled={inputProps.disabled} />
      <CheckMark disabled={inputProps.disabled} />
    </Label>
  );
};

export default CheckBox;
