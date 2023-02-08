import React from "react";
import { spacingTokens } from "../../types/tokens";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "destructive" | "rounded";
  buttonStyle?: "primary" | "secondary" | "tertiary" | "outlined";
  buttonSize?: "xSmall" | "small" | "medium" | "large";
  iconOnly?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  spaceAfter?: spacingTokens;
}
