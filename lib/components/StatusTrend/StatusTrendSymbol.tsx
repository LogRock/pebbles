import React, { FC, useContext } from "react";
import { ThemeContext } from "styled-components";

import { StatusTrendProps } from "./StatusTrend.types";

export const StatusTrendSymbol: FC<StatusTrendProps> = ({
  variant,
  direction,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      {direction === "up" && (
        <svg
          data-testid="up-arrow"
          width={10}
          height={6}
          viewBox="0 0 30 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4444 16.2223H28M28 16.2223V4.66672M28 16.2223L16.4444 4.66672L10.6667 10.4445L2 1.77783"
            stroke={theme.statusTrend.iconColor[variant]}
            strokeWidth="2.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {direction === "down" && (
        <svg
          data-testid="down-arrow"
          width={10}
          height={6}
          viewBox="0 0 30 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            data-testid="down-arrow-path"
            d="M16.4444 1.77783H28M28 1.77783V13.3334M28 1.77783L16.4444 13.3334L10.6667 7.55561L2 16.2223"
            stroke={theme.statusTrend.iconColor[variant]}
            strokeWidth="2.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {direction === "neutral" && (
        <svg
          width={10}
          height={6}
          viewBox="0 0 30 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 2H2"
            stroke={theme.statusTrend.iconColor[variant]}
            strokeWidth="2.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};
