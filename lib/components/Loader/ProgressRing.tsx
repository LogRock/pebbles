import React, { FC, useContext, useMemo } from "react";

import styled, { ThemeContext } from "styled-components";
import { TypographyParagraphProps } from "../Typography";

import { ProgressRingProps } from "./Loader.types";
import { spacingTokens } from "../../types/tokens";

export const RingWrapper = styled.div<{
  size: number;
  spaceAfter?: spacingTokens;
}>`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  svg {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  circle {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    transition: stroke-dashoffset 0.35s;
  }
`;

export const Label = styled.div<TypographyParagraphProps>`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.paragraphXSmall.fontFamily};
  font-size: ${({ theme }) =>
    theme.typography.paragraphXSmall.desktop.fontSize};
  font-style: normal;
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.paragraphXSmall.desktop.weights[weight]
      : theme.typography.paragraphXSmall.desktop.weights.normal};
  line-height: ${({ theme }) =>
    theme.typography.paragraphXSmall.desktop.lineHeight};
`;

const ProgressRing: FC<ProgressRingProps> = ({
  radius,
  stroke,
  percentage,
  colorGradient,
  showBaseRing,
  label,
  spaceAfter,
  variant = "primary",
}) => {
  const theme = useContext(ThemeContext);

  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getRingForegroundColor = useMemo(() => {
    if (colorGradient) {
      return "url(#ring_gradient)";
    }
    return theme.progressRing.ringForegroundColor[variant];
  }, [colorGradient, variant]);

  const getRingBackgroundColor = useMemo(() => {
    if (colorGradient) {
      return theme.progressRing.ringBackgroundColor.primary;
    }
    return theme.progressRing.ringBackgroundColor[variant];
  }, [colorGradient, variant]);

  return (
    <RingWrapper size={radius * 2} spaceAfter={spaceAfter}>
      {showBaseRing && (
        <svg height={radius * 2} width={radius * 2}>
          <circle
            data-testid="ring"
            stroke={getRingBackgroundColor}
            fill="transparent"
            strokeWidth={stroke}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
      )}
      <svg height={radius * 2} width={radius * 2}>
        <defs>
          <linearGradient
            id="ring_gradient"
            x1="0"
            y1="0"
            x2="71.8942"
            y2="10.6352"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF5F6D" />
            <stop offset="1" stopColor="#FFC371" />
          </linearGradient>
        </defs>
        <circle
          stroke={getRingForegroundColor}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      {label && <Label>{label}</Label>}
    </RingWrapper>
  );
};

export default ProgressRing;
