import React, { PropsWithChildren } from "react";
import { StyledText, StyledTitle } from "./Typography.styled";
import { TextProps, TitleProps } from "./Typography.types";

export function Text({
  as,
  type = "paragraphMedium",
  color = "neutral",
  shade = "900",
  weight = "normal",
  children,
}: PropsWithChildren<TextProps>) {
  if (!as) {
    switch (type) {
      case "overlineLarge":
        return (
          <StyledText
            as="span"
            type={type}
            color={color}
            shade={shade}
            weight={weight}
          >
            {children}
          </StyledText>
        );
      case "overlineMedium":
        return (
          <StyledText
            as="span"
            type={type}
            color={color}
            shade={shade}
            weight={weight}
          >
            {children}
          </StyledText>
        );
      case "overlineXSmall":
        return (
          <StyledText
            as="span"
            type={type}
            color={color}
            shade={shade}
            weight={weight}
          >
            {children}
          </StyledText>
        );
      case "paragraphLarge":
        return (
          <StyledText
            as="p"
            type={type}
            color={color}
            shade={shade}
            weight={weight}
          >
            {children}
          </StyledText>
        );
      case "paragraphMedium":
        return (
          <StyledText
            as="p"
            type={type}
            color={color}
            shade={shade}
            weight={weight}
          >
            {children}
          </StyledText>
        );
      case "paragraphSmall":
        return (
          <StyledText
            as="p"
            type={type}
            color={color}
            shade={shade}
            weight={weight}
          >
            {children}
          </StyledText>
        );
      case "paragraphXSmall":
        return (
          <StyledText
            as="p"
            type={type}
            color={color}
            shade={shade}
            weight={weight}
          >
            {children}
          </StyledText>
        );
    }
  }

  return (
    <StyledText type={type} color={color} shade={shade} weight={weight} as={as}>
      {children}
    </StyledText>
  );
}

export function Title({
  as,
  type = "headingH1",
  color = "neutral",
  shade = "900",
  weight = "bold",
  children,
}: PropsWithChildren<TitleProps>) {
  if (!as) {
    switch (type) {
      case "displayLarge":
        return (
          <StyledTitle
            type={type}
            color={color}
            shade={shade}
            weight={weight}
            as="h1"
          >
            {children}
          </StyledTitle>
        );
      case "displaySmall":
        return (
          <StyledTitle
            type={type}
            color={color}
            shade={shade}
            weight={weight}
            as="h2"
          >
            {children}
          </StyledTitle>
        );
      case "headingH1":
        return (
          <StyledTitle
            type={type}
            color={color}
            shade={shade}
            weight={weight}
            as="h1"
          >
            {children}
          </StyledTitle>
        );
      case "headingH2":
        return (
          <StyledTitle
            type={type}
            color={color}
            shade={shade}
            weight={weight}
            as="h2"
          >
            {children}
          </StyledTitle>
        );
      case "headingH3":
        return (
          <StyledTitle
            type={type}
            color={color}
            shade={shade}
            weight={weight}
            as="h3"
          >
            {children}
          </StyledTitle>
        );
      case "headingH4":
        return (
          <StyledTitle
            type={type}
            color={color}
            shade={shade}
            weight={weight}
            as="h4"
          >
            {children}
          </StyledTitle>
        );
      case "headingH5":
        return (
          <StyledTitle
            type={type}
            color={color}
            shade={shade}
            weight={weight}
            as="h5"
          >
            {children}
          </StyledTitle>
        );
      case "headingH6":
        return (
          <StyledTitle
            type={type}
            color={color}
            shade={shade}
            weight={weight}
            as="h6"
          >
            {children}
          </StyledTitle>
        );
    }
  }

  return (
    <StyledTitle
      as={as}
      type={type}
      color={color}
      shade={shade}
      weight={weight}
    >
      {children}
    </StyledTitle>
  );
}
