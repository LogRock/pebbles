import React, { FC } from "react";

import { StepperStepProps } from "./Stepper.types";
import {
  Step,
  StepIndicatorContainer,
  StepIndicator,
  StepCheckMark,
  StepContent,
  StepLine,
} from "./Stepper.styled";

const StepperStep: FC<StepperStepProps> = ({
  stepIndex,
  last,
  completed,
  current,
  onStepClick,
  children,
}) => {
  return (
    <Step
      key={`${stepIndex}`}
      onClick={() => {
        onStepClick && onStepClick();
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
