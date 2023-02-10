import React, { PropsWithChildren } from "react";
import { StyledBox } from "./Box.styled";
import { BoxProps } from "./Box.types";

export default function Box({
  align = "center",
  backgroundColor = "white",
  backgroundShade = "500",
  borderRadius = "zero",
  colGap = "zero",
  direction = "column",
  justify = "flex-start",
  margin = "zero",
  padding = "zero",
  rowGap = "zero",
  shadow = "none",
  noWrap = false,
  width = "12/12",
  grow = false,
  shrink = false,
  spaceAfter = "zero",
  ...rest
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
    width,
    grow,
    shrink,
    spaceAfter,
  };

  return <StyledBox {...props} {...rest} />;
}
