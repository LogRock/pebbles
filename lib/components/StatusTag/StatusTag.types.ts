import React from "react";

export interface StatusTagProps {
  label?: string;
  size: "micro" | "small" | "medium" | "large";
  variant: "error" | "warning" | "success" | "neutral";
  icon?: React.ReactNode;
  collapsed?: boolean | false;
}
