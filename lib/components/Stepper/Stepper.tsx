import React, { FC } from "react";

import { Steps } from "./Stepper.styled";
import { StepperProps } from "./Stepper.types";

const Stepper: FC<StepperProps> = ({
  onStepClick,
  forceTwoDigitsIndicator = false,
  showHoverEffect = true,
  children,
  ...props
}) => {
  return <Steps>{children}</Steps>;
};

export default Stepper;
