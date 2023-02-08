import React, { FC } from "react";

import { Steps } from "./Stepper.styled";
import { StepperProps } from "./Stepper.types";

const Stepper: FC<StepperProps> = ({
  showHoverEffect,
  children,
  spaceAfter,
  ...props
}) => {
  return (
    <Steps showHoverEffect={showHoverEffect} spaceAfter={spaceAfter} {...props}>
      {children}
    </Steps>
  );
};

export default Stepper;
