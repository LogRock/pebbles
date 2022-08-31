import React from "react";

import {
  Step,
  StepCheckMark,
  StepIndex,
  StepLabel,
  Steps,
} from "./Stepper.styled";
import { StepperProps } from "./Stepper.types";

const Stepper = (props: StepperProps) => {
  const {
    labels,
    finishedSteps,
    curStep,
    onStepClick,
    forceTwoDigitsIndicator = true,
    showHoverEffect = true,
  } = props;

  const adjustStepDisplay = (stepNum: number) => {
    if (forceTwoDigitsIndicator && stepNum < 10) {
      return stepNum.toString().padStart(2, "0");
    }
    return stepNum.toString();
  };

  const stepIsFinished = (stepNum: number) => {
    if (finishedSteps && finishedSteps.length !== 0) {
      return finishedSteps?.indexOf(stepNum) !== -1;
    }
    return false;
  };

  let itens;
  if (labels) {
    itens = labels.map((label, index) => {
      const stepNum = index + 1;
      const last = stepNum === labels.length;
      const current = stepNum === curStep;
      const finished = stepIsFinished(stepNum);

      return (
        <Step
          key={`${index}_${label}`}
          onClick={() => {
            onStepClick && onStepClick(stepNum);
          }}
          showHoverEffect={showHoverEffect}
        >
          <StepIndex
            isCurStep={current}
            isLastItem={last}
            isFinished={finished}
          >
            <p>{adjustStepDisplay(stepNum)}</p>
            <StepCheckMark isCurStep={current} isFinished={finished} />
          </StepIndex>
          <StepLabel isCurStep={current}>{label}</StepLabel>
        </Step>
      );
    });
  }

  return <Steps>{itens}</Steps>;
};

export default Stepper;
