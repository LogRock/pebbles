import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "destructive";
  buttonStyle?: "primary" | "secondary" | "tertiary" | "outlined";
  buttonSize?: "sXmall" | "small" | "medium" | "large";
  iconOnly?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
