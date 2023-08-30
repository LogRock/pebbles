import React, { FC, PropsWithChildren } from "react";

import { StatusTrendWrapper } from "./StatusTrend.styled";
import { StatusTrendProps } from "./StatusTrend.types";
import { StatusTrendSymbol } from "./StatusTrendSymbol";

const StatusTrend: FC<PropsWithChildren<StatusTrendProps>> = ({
  direction = "neutral",
  variant = "neutral",
  children,
  spaceAfter,
  ...props
}) => {
  return (
    <StatusTrendWrapper variant={variant} spaceAfter={spaceAfter} {...props}>
      <StatusTrendSymbol direction={direction} variant={variant} />
      {children}
    </StatusTrendWrapper>
  );
};

export default StatusTrend;
