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
  borderColor = "neutral",
  borderShade = "200",
  borderWidth = "zero",
  display = "flex",
  gridColumns = "unset",
  gridRows = "unset",
  gridArea = "unset",
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
    borderColor,
    borderShade,
    borderWidth,
    display,
    gridColumns,
    gridRows,
    gridArea,
  };

  return <StyledBox {...props} {...rest} />;
}
