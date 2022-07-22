import React, { FC } from "react";

import ProgressRing from "../Loader/ProgressRing";
import { StatusPctWrapper } from "./StatusPercentage.styled";
import { StatusPercentageProps } from "./StatusPercentage.types";

export interface StatusPercentageSizeType {
  radius: number;
  stroke: number;
}

const StatusPercentage: FC<StatusPercentageProps> = ({
  percentage,
  size = "medium",
  children,
  variant = "warning",
  ...props
}) => {
  const sizes = {
    small: { radius: 16, stroke: 4 },
    medium: { radius: 20, stroke: 4 },
    large: { radius: 24, stroke: 5 },
  };

  return (
    <StatusPctWrapper size={size} {...props}>
      <ProgressRing
        percentage={percentage}
        radius={sizes[size].radius}
        stroke={sizes[size].stroke}
        showBaseRing
        variant={variant}
      />
      {children}
    </StatusPctWrapper>
  );
};

export default StatusPercentage;
