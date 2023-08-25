import React from "react";
import { colorTokens, shadeTokens, spacingTokens } from "../../types/tokens";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "destructive" | "rounded";
  buttonStyle?: "primary" | "secondary" | "tertiary" | "outlined";
  color?: colorTokens;
  shade?: shadeTokens;
  textColor?: colorTokens;
  textShade?: shadeTokens;
  buttonSize?: "xSmall" | "small" | "medium" | "large";
  iconOnly?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  spaceAfter?: spacingTokens;
}
