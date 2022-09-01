export interface StepperProps {
  stepIndex: number | string;
  current?: boolean;
  last?: boolean;
  completed?: boolean;
  showHoverEffect?: boolean;
  onStepClick?: (stepNum: number | string) => void;
}
