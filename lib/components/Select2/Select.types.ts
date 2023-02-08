import React from "react";
import { spacingTokens } from "../../types/tokens";

export interface CustomSelectProps {
  status?: "info" | "destructive";
  label?: React.ReactNode;
  helper?: React.ReactNode;
  spaceAfter?: spacingTokens;
}
