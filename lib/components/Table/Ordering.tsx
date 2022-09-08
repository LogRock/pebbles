import React, { FC, useContext } from "react";
import { ThemeContext } from "styled-components";
import { OrderingEnum, OrderingProps } from "./Table.types";

const Ordering: FC<OrderingProps> = ({ currentOrder }) => {
  const theme = useContext(ThemeContext);

  if (currentOrder === OrderingEnum.ASC)
    return (
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginTop: 6 }}
      >
        <path
          d="M11 6L6 1L1 6"
          stroke="#6B7280"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

  if (currentOrder === OrderingEnum.DESC)
    return (
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginTop: 6 }}
      >
        <path
          d="M11 1L6 6L1 1"
          stroke="#6B7280"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

  return (
    <svg
      width="11"
      height="16"
      viewBox="0 0 11 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ verticalAlign: "middle" }}
    >
      <>
        <path
          d="M1.375 5L5.375 1L9.375 5M9.375"
          stroke={theme.colors.neutral[400]}
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.375 5M9.375 11L5.375 15L1.375 11"
          stroke={theme.colors.neutral[400]}
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    </svg>
  );
};

export default Ordering;
