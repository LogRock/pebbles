import React from "react";
import styled from "styled-components";

export type ProgressBarProps = {
  percentage: number;
  size: "small" | "medium" | "large" | "xLarge";
};

const Bar = styled.div<Pick<ProgressBarProps, "size">>`
  position: relative;
  width: 100%;
  height: ${({ theme, size }) => theme.progressBar.sizes[size || "medium"]};
  overflow: hidden;

  border-radius: 48px;

  background-color: ${({ theme }) => theme.progressBar.bgColor};
`;

const InnerBar = styled.div`
  position: absolute;
  width: ${(props: ProgressBarProps) => `${props.percentage}%` || "0%"};
  height: ${({ theme, size }) => theme.progressBar.sizes[size || "medium"]};

  border-radius: 48px;

  background-color: ${({ theme }) => theme.progressBar.barColor};
`;

const ProgressBar = (props: ProgressBarProps) => {
  return (
    <Bar {...props}>
      <InnerBar {...props} />
    </Bar>
  );
};

export default ProgressBar;
