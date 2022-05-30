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
}) => {
  return (
    <StatusTrendWrapper variant={variant}>
      <StatusTrendSymbol direction={direction} variant={variant} />
      <LabelWrapper>
        <StyledPrimaryLabel variant={variant}>
          {labelPrimary}
        </StyledPrimaryLabel>
        <StyledSecondaryLabel>{labelSecondary}</StyledSecondaryLabel>
      </LabelWrapper>
    </StatusTrendWrapper>
  );
};

export default StatusTrend;
