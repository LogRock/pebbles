import React, { FC } from "react";

import { StatusTagProps } from "./StatusTag.types";
import {
  IconWrapper,
  StatusTagWrapper,
  StyledOverlineLarge,
} from "./StatusTag.styled";

const StatusTag: FC<StatusTagProps> = ({
  size = "medium",
  variant = "neutral",
  icon,
  collapsed,
  children,
  ...props
}) => {
  return (
    <StatusTagWrapper variant={variant} size={size} collapsed={collapsed} {...props}>
      {icon && (
        <IconWrapper variant={variant} hasLabel={Boolean(children)}>
          {icon}
        </IconWrapper>
      )}
      <StyledOverlineLarge variant={variant} size={size} collapsed={collapsed}>
        {children}
      </StyledOverlineLarge>
    </StatusTagWrapper>
  );
};

export default StatusTag;
