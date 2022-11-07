import React from "react";

export interface TabLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  disabled?: boolean;
  href?: string;
}
