import React from "react";

export interface TabLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  disabled?: boolean;
  bgColor?: string;
  borderRadius?: number;
}
