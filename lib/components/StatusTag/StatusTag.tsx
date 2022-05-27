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
  children,
}) => {
  return (
    <StatusTagWrapper variant={variant} size={size}>
      {icon && (
        <IconWrapper variant={variant} hasLabel={Boolean(children)}>
          {icon}
        </IconWrapper>
      )}
      <StyledOverlineLarge variant={variant} size={size}>
        {children}
      </StyledOverlineLarge>
    </StatusTagWrapper>
  );
};

export default StatusTag;
