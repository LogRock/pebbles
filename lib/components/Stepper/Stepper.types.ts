import React from "react";
import { spacingTokens } from "../../types/tokens";

export interface StepperProps {
  showHoverEffect?: boolean;
  spaceAfter?: spacingTokens;
}

export interface StepperStepProps {
  stepIndex?: number | string;
  current?: boolean;
  last?: boolean;
  completed?: boolean;
  onStepClick?: () => void;
  icon?: React.ReactNode;
}
