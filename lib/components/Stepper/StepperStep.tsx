import React, { FC } from "react";

import { StepperProps } from "./Stepper.types";
import {
  Step,
  StepIndicatorContainer,
  StepIndicator,
  StepCheckMark,
  StepContent,
  StepLine,
} from "./Stepper.styled";

const StepperStep: FC<StepperProps> = ({
  stepIndex,
  last = false,
  completed = false,
  current = false,
  onStepClick,
  showHoverEffect = true,
  children,
}) => {
  return (
    <Step
      key={`${stepIndex}`}
      showHoverEffect={showHoverEffect}
      onClick={() => {
        onStepClick && stepIndex && onStepClick(stepIndex);
      }}
    >
      <StepIndicatorContainer>
        <StepIndicator current={current} last={last} completed={completed}>
          <p>{stepIndex}</p>
          <StepCheckMark current={current} completed={completed} />
        </StepIndicator>
        {!last && <StepLine completed={completed} />}
      </StepIndicatorContainer>

      <StepContent current={current}>{children}</StepContent>
    </Step>
  );
};

export default StepperStep;
