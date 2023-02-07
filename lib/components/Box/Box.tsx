import React, { PropsWithChildren } from "react";
import { StyledBox } from "./Box.styled";
import { BoxProps } from "./Box.types";

export default function Box({
  align = "center",
  backgroundColor = "white",
  backgroundShade = "500",
  borderRadius = "xxsm",
  colGap = "md",
  direction = "column",
  justify = "flex-start",
  margin = "md",
  padding = "md",
  rowGap = "md",
  shadow = "none",
  noWrap = false,
  children,
}: PropsWithChildren<BoxProps>) {
  const props = {
    align,
    backgroundColor,
    backgroundShade,
    borderRadius,
    colGap,
    direction,
    justify,
    margin,
    padding,
    rowGap,
    shadow,
    noWrap,
  };

  return <StyledBox {...props}>{children}</StyledBox>;
}
