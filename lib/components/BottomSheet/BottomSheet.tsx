import React, { ComponentProps } from "react";
import styled from "styled-components";
import { BottomSheet as RSBS } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

const StyledRSBS = styled(RSBS)`
  :root {
    --rsbs-backdrop-bg: rgba(0, 0, 0, 0.25);
    --rsbs-overlay-rounded: ${({ theme }) => theme.spacings.md};
  }

  [data-rsbs-header] {
    flex-shrink: 0;
    padding: ${({ theme }) =>
      `${theme.spacings.xxxbig} ${theme.spacings.md} ${theme.spacings.xxsm}`};

    box-shadow: none !important;

    cursor: ns-resize;

    &:before {
      content: "";

      display: block;
      position: absolute;
      top: calc(8px + env(safe-area-inset-top));
      left: 50%;
      width: 100px;
      height: 4px;

      transform: translateX(-50%);

      border-radius: 2px;

      background-color: ${({ theme }) => theme.colors.neutral[400]};
    }
  }
`;

export default function BottomSheet(props: ComponentProps<typeof RSBS>) {
  return <StyledRSBS {...props} />;
}
