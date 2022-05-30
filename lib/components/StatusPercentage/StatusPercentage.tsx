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
}) => {
  const getSizeParams = (): StatusPercentageSizeType => {
    const sizes = {
      small: { radius: 18, stroke: 4 },
      medium: { radius: 20, stroke: 4 },
      large: { radius: 24, stroke: 5 },
    };
    return sizes[size] as StatusPercentageSizeType;
  };

  return (
    <StatusPctWrapper size={size}>
      <ProgressRing
        percentage={percentage}
        radius={getSizeParams().radius}
        stroke={getSizeParams().stroke}
        showBaseRing
      />
      {children}
    </StatusPctWrapper>
  );
};

export default StatusPercentage;
