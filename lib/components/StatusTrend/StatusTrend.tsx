import React, { FC } from "react";

import { StatusTrendWrapper } from "./StatusTrend.styled";
import { StatusTrendProps } from "./StatusTrend.types";
import { StatusTrendSymbol } from "./StatusTrendSymbol";

const StatusTrend: FC<StatusTrendProps> = ({
  direction = "neutral",
  variant = "neutral",
  children,
  ...props
}) => {
  return (
    <StatusTrendWrapper variant={variant} {...props}>
      <StatusTrendSymbol direction={direction} variant={variant} />
      {children}
    </StatusTrendWrapper>
  );
};

export default StatusTrend;
