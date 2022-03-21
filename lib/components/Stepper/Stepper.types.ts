export interface StepperProps {
  labels?: string[];
  finishedSteps?: number[];
  curStep?: number;
  onStepClick?: (stepNum: number) => void;
}
