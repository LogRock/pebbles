import { spacingTokens } from "../../types/tokens";

export interface ProgressBarProps {
  percentage: number;
  size: "small" | "medium" | "large" | "xLarge";
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "destructive"
    | "warning"
    | "neutral"
    | "destructive"
    | "destructiveAlt";
  spaceAfter?: spacingTokens;
}

export interface LoaderProps {
  message: string;
  spaceAfter?: spacingTokens;
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
    | "destructive"
    | "warning"
    | "neutral";
  spaceAfter?: spacingTokens;
}
