import React from "react";
import { StyledText, StyledTitle } from "./Typography.styled";
import { TextProps, TitleProps } from "./Typography.types";

export function Text(props: TextProps) {
  const { as, type } = props;

  if (!as) {
    switch (type) {
      case "overlineLarge":
        return <StyledText {...props} as="span" />;
      case "overlineMedium":
        return <StyledText {...props} as="span" />;
      case "overlineXSmall":
        return <StyledText {...props} as="span" />;
      case "paragraphLarge":
        return <StyledText {...props} as="p" />;
      case "paragraphMedium":
        return <StyledText {...props} as="p" />;
      case "paragraphSmall":
        return <StyledText {...props} as="p" />;
      case "paragraphXSmall":
        return <StyledText {...props} as="p" />;
    }
  }

  return <StyledText {...props} />;
}

export function Title(props: TitleProps) {
  const { as, type } = props;

  if (!as) {
    switch (type) {
      case "displayLarge":
        return <StyledTitle {...props} as="h1" />;
      case "displaySmall":
        return <StyledTitle {...props} as="h2" />;
      case "headingH1":
        return <StyledTitle {...props} as="h1" />;
      case "headingH2":
        return <StyledTitle {...props} as="h2" />;
      case "headingH3":
        return <StyledTitle {...props} as="h3" />;
      case "headingH4":
        return <StyledTitle {...props} as="h4" />;
      case "headingH5":
        return <StyledTitle {...props} as="h5" />;
      case "headingH6":
        return <StyledTitle {...props} as="h6" />;
    }
  }

  return <StyledTitle {...props} />;
}
