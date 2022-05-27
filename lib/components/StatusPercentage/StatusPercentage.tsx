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
  const getRingSize = (): StatusPercentageSizeType => {
    switch (size) {
      case "small":
        return { radius: 18, stroke: 4 };
      case "medium":
        return { radius: 20, stroke: 4 };
      case "large":
        return { radius: 24, stroke: 5 };
    }
  };

  const getTextSize = (): string => {
    switch (size) {
      case "small":
        return "24px";
      case "medium":
        return "28px";
      case "large":
        return "32px";
    }
  };

  return (
    <StatusPctWrapper fontSize={getTextSize()}>
      <ProgressRing
        percentage={percentage}
        radius={getRingSize().radius}
        stroke={getRingSize().stroke}
        showBaseRing
      />
      {children}
    </StatusPctWrapper>
  );
};

export default StatusPercentage;
