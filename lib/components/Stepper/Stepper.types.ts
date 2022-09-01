export interface StepperProps {
  stepIndex: number;
  current?: boolean;
  last?: boolean;
  completed?: boolean;
  forceTwoDigitsIndicator?: boolean;
  showHoverEffect?: boolean;
  onStepClick?: (stepNum: number) => void;
}
