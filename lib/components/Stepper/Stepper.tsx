import React, { FC } from "react";

import { Steps } from "./Stepper.styled";
import { StepperProps } from "./Stepper.types";

const Stepper: FC<StepperProps> = ({
  onStepClick,
  showHoverEffect = true,
  children,
  ...props
}) => {
  return (
    <Steps showHoverEffect={showHoverEffect} {...props}>
      {children}
    </Steps>
  );
};

export default Stepper;
