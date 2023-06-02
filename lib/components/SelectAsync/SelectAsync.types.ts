import React from "react";
import { spacingTokens } from "../../types/tokens";

export interface CustomSelectProps {
  required?: boolean;
  destructive?: boolean;
  label?: React.ReactNode;
  helper?: React.ReactNode;
  helperIcon?: React.ReactNode;
  spaceAfter?: spacingTokens;
}
