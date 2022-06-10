import React, { FC } from "react";

import {
  LabelWrapper,
  StatusTrendWrapper,
  StyledPrimaryLabel,
  StyledSecondaryLabel,
} from "./StatusTrend.styled";
import { StatusTrendProps } from "./StatusTrend.types";
import { StatusTrendSymbol } from "./StatusTrendSymbol";

const StatusTrend: FC<StatusTrendProps> = ({
  labelPrimary,
  labelSecondary,
  direction = "neutral",
  variant = "neutral",
  ...props
}) => {
  return (
    <StatusTrendWrapper variant={variant} {...props}>
      <StatusTrendSymbol direction={direction} variant={variant} />
      <LabelWrapper hasSecondaryLabel={Boolean(labelSecondary)}>
        <StyledPrimaryLabel variant={variant}>
          {labelPrimary}
        </StyledPrimaryLabel>
        <StyledSecondaryLabel>{labelSecondary}</StyledSecondaryLabel>
      </LabelWrapper>
    </StatusTrendWrapper>
  );
};

export default StatusTrend;
