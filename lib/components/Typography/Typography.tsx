import React, { PropsWithChildren } from "react";
import { StyledText, StyledTitle } from "./Typography.styled";
import { TextProps, TitleProps } from "./Typography.types";

export function Text({
  as,
  type = "paragraphMedium",
  color = "neutral",
  shade = "900",
  weight = "normal",
  spaceAfter,
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
            spaceAfter={spaceAfter}
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
            spaceAfter={spaceAfter}
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
            spaceAfter={spaceAfter}
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
            spaceAfter={spaceAfter}
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
            spaceAfter={spaceAfter}
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
            spaceAfter={spaceAfter}
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
            spaceAfter={spaceAfter}
          >
            {children}
          </StyledText>
        );
    }
  }

  return (
    <StyledText
      type={type}
      color={color}
      shade={shade}
      weight={weight}
      spaceAfter={spaceAfter}
      as={as}
    >
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
  spaceAfter,
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
            spaceAfter={spaceAfter}
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
            spaceAfter={spaceAfter}
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
            spaceAfter={spaceAfter}
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
            spaceAfter={spaceAfter}
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
            spaceAfter={spaceAfter}
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
            spaceAfter={spaceAfter}
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
            spaceAfter={spaceAfter}
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
            spaceAfter={spaceAfter}
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
      spaceAfter={spaceAfter}
    >
      {children}
    </StyledTitle>
  );
}
