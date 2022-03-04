import React from "react";

export type ButtonProps = {
  variant?: "primary" | "destructive";
  buttonStyle?: "primary" | "secondary" | "tertiary" | "outlined";
  buttonSize?: "sXmall" | "small" | "medium" | "large";
  iconOnly?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};
