import { spacingTokens } from "../../types/tokens";

export interface StatusPercentageProps {
  percentage: number;
  size: "small" | "medium" | "large";
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "destructive"
    | "warning"
    | "neutral";
  spaceAfter?: spacingTokens;
}
