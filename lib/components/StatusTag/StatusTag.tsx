import React, { FC } from "react";

import Icon from "@mdi/react";
import {
  mdiAlert,
  mdiAlertCircle,
  mdiMinusCircle,
  mdiCheckCircle,
} from "@mdi/js";

import { StatusTagProps } from "./StatusTag.types";
import {
  IconWrapper,
  StatusTagWrapper,
  StyledOverlineLarge,
} from "./StatusTag.styled";

const StatusTag: FC<StatusTagProps> = ({ label, size, variant }) => {
  const getIcon = () => {
    switch (variant) {
      case "error":
        return mdiAlert;
      case "warning":
        return mdiAlertCircle;
      case "success":
        return mdiCheckCircle;
      case "neutral":
        return mdiMinusCircle;
      default:
        return mdiMinusCircle;
    }
  };

  const getIconSize = () => {
    switch (size) {
      case "small":
        return 0.6;
      case "medium":
        return 0.75;
      case "large":
        return 0.85;
      default:
        return 0.75;
    }
  };

  return (
    <StatusTagWrapper variant={variant} size={size}>
      <IconWrapper variant={variant}>
        <Icon path={getIcon()} size={getIconSize()} />
      </IconWrapper>
      <StyledOverlineLarge variant={variant} size={size}>
        {label}
      </StyledOverlineLarge>
    </StatusTagWrapper>
  );
};

export default StatusTag;
