export interface ProgressBarProps {
  percentage: number;
  size: "small" | "medium" | "large" | "xLarge";
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "neutral"
    | "destructive"
    | "destructiveAlt";
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
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "neutral";
}
