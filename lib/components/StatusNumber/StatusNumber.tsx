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
  currentValue,
  totalValue,
  variant = "neutral",
  icon,
  ...props
}) => {
  const adaptValue = (value: string | number | null | undefined) => {
    if (!value) {
      return "--";
    }
    return value;
  };

  return (
    <StatusNumberWrapper variant={variant} {...props}>
      {icon && <IconWrapper variant={variant}>{icon}</IconWrapper>}
      <LabelWrapper>
        <StyledValueLarge variant={variant}>
          {adaptValue(currentValue)}
        </StyledValueLarge>
        <StyledValueMedium variant={variant}>/</StyledValueMedium>
        <StyledValueMedium variant={variant}>
          {adaptValue(totalValue)}
        </StyledValueMedium>
      </LabelWrapper>
    </StatusNumberWrapper>
  );
};

export default StatusNumber;
