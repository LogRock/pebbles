import React, { FC, PropsWithChildren } from "react";

import { Steps } from "./Stepper.styled";
import { StepperProps } from "./Stepper.types";

const Stepper: FC<PropsWithChildren<StepperProps>> = ({
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
