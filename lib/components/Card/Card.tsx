import React, { FC } from "react";
import { CardWrapper } from "./Card.styled";
import { CardProps } from "./Card.types";

const Card: FC<CardProps> = ({
  bgColor = "#fff",
  borderRadius = 8,
  padding = 24,
  shadow = true,
  children,
}) => {
  return (
    <CardWrapper
      bgColor={bgColor}
      borderRadius={borderRadius}
      padding={padding}
      shadow={shadow}
    >
      {children}
    </CardWrapper>
  );
};

export default Card;
