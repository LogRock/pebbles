import { spacingTokens } from "../../types/tokens";

export interface StatusTrendProps {
  direction: "up" | "down" | "neutral";
  variant: "negative" | "positive" | "neutral";
  spaceAfter?: spacingTokens;
}
