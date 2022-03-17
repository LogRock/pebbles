import React, { FC } from "react";

import { ToggleIndicator, Input, Label } from "./Toggle.styled";
import { ToggleProps } from "./Toggle.types";

const Toggle: FC<ToggleProps> = ({ children, spaced, ...inputProps }) => {
  return (
    <Label disabled={inputProps.disabled} spaced={spaced}>
      {children}
      <Input type="checkbox" {...inputProps} disabled={inputProps.disabled} />
      <ToggleIndicator disabled={inputProps.disabled} />
    </Label>
  );
};

export default Toggle;
