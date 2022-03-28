export interface ProgressBarProps {
  percentage: number;
  size: "small" | "medium" | "large" | "xLarge";
}

export interface LoaderProps {
  message: string;
}

export interface ProgressRingProps {
  radius: number;
  percentage: number;
  stroke: number;
  colorGradient?: boolean;
  showBaseRing?: boolean;
  label?: string;
}
