import React from "react";

export interface StatusTagProps {
  label?: string;
  size: "small" | "medium" | "large";
  variant: "error" | "warning" | "success" | "neutral";
  icon?: React.ReactNode;
}
