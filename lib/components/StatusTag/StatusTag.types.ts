import React from "react";

export interface StatusTagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  size: "micro" | "small" | "medium" | "large";
  variant?:
    | "error"
    | "errorAlt"
    | "warning"
    | "warningAlt"
    | "success"
    | "neutral";
  icon?: React.ReactNode;
  collapsed?: boolean | false;
}
