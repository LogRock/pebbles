import React from "react";

export interface StepperProps {
  showHoverEffect?: boolean;
}

export interface StepperStepProps {
  stepIndex?: number | string;
  current?: boolean;
  last?: boolean;
  completed?: boolean;
  onStepClick?: () => void;
  icon?: React.ReactNode;
}
