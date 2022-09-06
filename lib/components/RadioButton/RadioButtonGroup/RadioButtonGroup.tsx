import React, { FC } from "react";
import { RadioButtonGroupLabel } from "./RadioButtonGroup.styled";
import { RadioButtonGroupProps } from "./RadioButtonGroup.types";

const RadioButtonGroup: FC<RadioButtonGroupProps> = (props) => {
  return (
    <div {...props}>
      <RadioButtonGroupLabel>{props.groupTitle}</RadioButtonGroupLabel>
      {props.children}
    </div>
  );
};

export default RadioButtonGroup;
