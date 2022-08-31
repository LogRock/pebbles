export interface StepperProps {
  labels?: string[];
  finishedSteps?: number[];
  curStep?: number;
  forceTwoDigitsIndicator?: boolean;
  showHoverEffect?: boolean;
  onStepClick?: (stepNum: number) => void;
}
