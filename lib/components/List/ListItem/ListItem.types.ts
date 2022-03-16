import React from "react";

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  contentStart?: React.ReactNode;
  label?: React.ReactNode;
  description?: React.ReactNode;
  alignment?: "start" | "end";
  contentEnd?: React.ReactNode;
  size?: "small" | "medium" | "large";
}
