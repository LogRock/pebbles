import React, { FC } from "react";

import { Steps } from "./Stepper.styled";
import { StepperProps } from "./Stepper.types";

const Stepper: FC<StepperProps> = ({ showHoverEffect, children, ...props }) => {
  return (
    <Steps showHoverEffect={showHoverEffect} {...props}>
      {children}
    </Steps>
  );
};

export default Stepper;
