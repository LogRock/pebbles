import React, { FC } from "react";

import { StatusTagProps } from "./StatusTag.types";
import {
  IconWrapper,
  StatusTagWrapper,
  StyledOverlineLarge,
} from "./StatusTag.styled";

const StatusTag: FC<StatusTagProps> = ({
  label,
  size = "medium",
  variant = "neutral",
  icon,
}) => {
  return (
    <StatusTagWrapper variant={variant} size={size}>
      {icon && (
        <IconWrapper variant={variant} label={label}>
          {icon}
        </IconWrapper>
      )}
      <StyledOverlineLarge variant={variant} size={size}>
        {label}
      </StyledOverlineLarge>
    </StatusTagWrapper>
  );
};

export default StatusTag;
