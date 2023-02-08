import React from "react";
import { spacingTokens } from "../../types/tokens";

export interface StatusNumberProps {
  currentValue?: string | number | null;
  totalValue?: string | number | null;
  variant: "destructive" | "warning" | "success" | "neutral";
  icon?: React.ReactNode;
  spaceAfter?: spacingTokens;
}
