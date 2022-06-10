import React, { FC } from "react";

import { StatusNumberProps } from "./StatusNumber.types";
import {
  IconWrapper,
  LabelWrapper,
  StatusNumberWrapper,
  StyledValueLarge,
  StyledValueMedium,
} from "./StatusNumber.styled";

const StatusNumber: FC<StatusNumberProps> = ({
  currentValue = 0,
  totalValue = 0,
  variant = "neutral",
  icon,
  ...props
}) => {
  return (
    <StatusNumberWrapper variant={variant} {...props}>
      {icon && <IconWrapper variant={variant}>{icon}</IconWrapper>}
      <LabelWrapper>
        <StyledValueLarge variant={variant}>{currentValue}</StyledValueLarge>
        <StyledValueMedium variant={variant}>/</StyledValueMedium>
        <StyledValueMedium variant={variant}>{totalValue}</StyledValueMedium>
      </LabelWrapper>
    </StatusNumberWrapper>
  );
};

export default StatusNumber;
