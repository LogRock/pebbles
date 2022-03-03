import { up } from "styled-breakpoints";
import styled from "styled-components";
import {
  TypographyParagraphProps,
  TypographyHeaderProps,
  TypographyOverlineProps,
} from "./Typography.types";

const decorationsFromProps = ({
  underlined,
  strikedThrough,
}: TypographyParagraphProps) => {
  const decorations = [];
  if (underlined) decorations.push("underline");
  if (strikedThrough) decorations.push("line-through");
  return decorations.join(" ");
};

export const DisplayLarge = styled.h1<TypographyHeaderProps>`
  font-family: ${({ theme }) => theme.typography.displayLarge.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  font-size: ${({ theme }) => theme.typography.displayLarge.mobile.fontSize};
  line-height: ${({ theme }) =>
    theme.typography.displayLarge.mobile.lineHeight};
  letter-spacing: ${({ theme }) =>
    theme.typography.displayLarge.mobile.tracking};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.displayLarge.mobile.weights[weight]
      : theme.typography.displayLarge.mobile.weights.normal};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.displayLarge.desktop.fontSize};
    line-height: ${({ theme }) =>
      theme.typography.displayLarge.desktop.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.displayLarge.desktop.tracking};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.displayLarge.desktop.weights[weight]
        : theme.typography.displayLarge.desktop.weights.normal};
  }
`;

export const DisplaySmall = styled.h2<TypographyHeaderProps>`
  font-family: ${({ theme }) => theme.typography.displaySmall.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  font-size: ${({ theme }) => theme.typography.displaySmall.mobile.fontSize};
  line-height: ${({ theme }) =>
    theme.typography.displaySmall.mobile.lineHeight};
  letter-spacing: ${({ theme }) =>
    theme.typography.displaySmall.mobile.tracking};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.displaySmall.mobile.weights[weight]
      : theme.typography.displaySmall.mobile.weights.normal};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.displaySmall.desktop.fontSize};
    line-height: ${({ theme }) =>
      theme.typography.displaySmall.desktop.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.displaySmall.desktop.tracking};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.displaySmall.desktop.weights[weight]
        : theme.typography.displaySmall.desktop.weights.normal};
  }
`;

export const HeadingH1 = styled.h1<TypographyHeaderProps>`
  font-family: ${({ theme }) => theme.typography.headingH1.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  font-size: ${({ theme }) => theme.typography.headingH1.mobile.fontSize};
  line-height: ${({ theme }) => theme.typography.headingH1.mobile.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.headingH1.mobile.tracking};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.headingH1.mobile.weights[weight]
      : theme.typography.headingH1.mobile.weights.normal};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.headingH1.desktop.fontSize};
    line-height: ${({ theme }) =>
      theme.typography.headingH1.desktop.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.headingH1.desktop.tracking};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.headingH1.desktop.weights[weight]
        : theme.typography.headingH1.desktop.weights.normal};
  }
`;

export const HeadingH2 = styled.h2<TypographyHeaderProps>`
  font-family: ${({ theme }) => theme.typography.headingH2.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  font-size: ${({ theme }) => theme.typography.headingH2.mobile.fontSize};
  line-height: ${({ theme }) => theme.typography.headingH2.mobile.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.headingH2.mobile.tracking};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.headingH2.mobile.weights[weight]
      : theme.typography.headingH2.mobile.weights.normal};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.headingH2.desktop.fontSize};
    line-height: ${({ theme }) =>
      theme.typography.headingH2.desktop.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.headingH2.desktop.tracking};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.headingH2.desktop.weights[weight]
        : theme.typography.headingH2.desktop.weights.normal};
  }
`;

export const HeadingH3 = styled.h3<TypographyHeaderProps>`
  font-family: ${({ theme }) => theme.typography.headingH3.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  font-size: ${({ theme }) => theme.typography.headingH3.mobile.fontSize};
  line-height: ${({ theme }) => theme.typography.headingH3.mobile.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.headingH3.mobile.tracking};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.headingH3.mobile.weights[weight]
      : theme.typography.headingH3.mobile.weights.normal};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.headingH3.desktop.fontSize};
    line-height: ${({ theme }) =>
      theme.typography.headingH3.desktop.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.headingH3.desktop.tracking};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.headingH3.desktop.weights[weight]
        : theme.typography.headingH3.desktop.weights.normal};
  }
`;

export const HeadingH4 = styled.h4<TypographyHeaderProps>`
  font-family: ${({ theme }) => theme.typography.headingH4.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  font-size: ${({ theme }) => theme.typography.headingH4.mobile.fontSize};
  line-height: ${({ theme }) => theme.typography.headingH4.mobile.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.headingH4.mobile.tracking};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.headingH4.mobile.weights[weight]
      : theme.typography.headingH4.mobile.weights.normal};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.headingH4.desktop.fontSize};
    line-height: ${({ theme }) =>
      theme.typography.headingH4.desktop.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.headingH4.desktop.tracking};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.headingH4.desktop.weights[weight]
        : theme.typography.headingH4.desktop.weights.normal};
  }
`;

export const HeadingH5 = styled.h5<TypographyHeaderProps>`
  font-family: ${({ theme }) => theme.typography.headingH5.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  font-size: ${({ theme }) => theme.typography.headingH5.mobile.fontSize};
  line-height: ${({ theme }) => theme.typography.headingH5.mobile.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.headingH5.mobile.tracking};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.headingH5.mobile.weights[weight]
      : theme.typography.headingH5.mobile.weights.normal};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.headingH5.desktop.fontSize};
    line-height: ${({ theme }) =>
      theme.typography.headingH5.desktop.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.headingH5.desktop.tracking};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.headingH5.desktop.weights[weight]
        : theme.typography.headingH5.desktop.weights.normal};
  }
`;

export const HeadingH6 = styled.h6<TypographyHeaderProps>`
  font-family: ${({ theme }) => theme.typography.headingH6.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  font-size: ${({ theme }) => theme.typography.headingH6.mobile.fontSize};
  line-height: ${({ theme }) => theme.typography.headingH6.mobile.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.headingH6.mobile.tracking};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.headingH6.mobile.weights[weight]
      : theme.typography.headingH6.mobile.weights.normal};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.headingH6.desktop.fontSize};
    line-height: ${({ theme }) =>
      theme.typography.headingH6.desktop.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.headingH6.desktop.tracking};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.headingH6.desktop.weights[weight]
        : theme.typography.headingH6.desktop.weights.normal};
  }
`;

export const ParagraphLarge = styled.p<TypographyParagraphProps>`
  font-family: ${({ theme }) => theme.typography.paragraphLarge.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  font-size: ${({ theme }) => theme.typography.paragraphLarge.fontSize};
  line-height: ${({ theme }) => theme.typography.paragraphLarge.lineHeight};

  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.paragraphLarge.weights[weight]
      : theme.typography.paragraphLarge.weights.normal};

  text-decoration: ${decorationsFromProps};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
`;

export const ParagraphMedium = styled.p<TypographyParagraphProps>`
  font-family: ${({ theme }) => theme.typography.paragraphMedium.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  font-size: ${({ theme }) => theme.typography.paragraphMedium.fontSize};
  line-height: ${({ theme }) => theme.typography.paragraphMedium.lineHeight};

  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.paragraphMedium.weights[weight]
      : theme.typography.paragraphMedium.weights.normal};

  text-decoration: ${decorationsFromProps};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
`;

export const ParagraphSmall = styled.p<TypographyParagraphProps>`
  font-family: ${({ theme }) => theme.typography.paragraphSmall.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  font-size: ${({ theme }) => theme.typography.paragraphSmall.fontSize};
  line-height: ${({ theme }) => theme.typography.paragraphSmall.lineHeight};

  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.paragraphSmall.weights[weight]
      : theme.typography.paragraphSmall.weights.normal};

  text-decoration: ${decorationsFromProps};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
`;

export const ParagraphXSmall = styled.p<TypographyParagraphProps>`
  font-family: ${({ theme }) => theme.typography.paragraphXSmall.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  font-size: ${({ theme }) => theme.typography.paragraphXSmall.fontSize};
  line-height: ${({ theme }) => theme.typography.paragraphXSmall.lineHeight};

  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.paragraphXSmall.weights[weight]
      : theme.typography.paragraphXSmall.weights.normal};

  text-decoration: ${decorationsFromProps};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
`;

export const OverlineLarge = styled.p<TypographyOverlineProps>`
  font-family: ${({ theme }) => theme.typography.overlineLarge.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  font-size: ${({ theme }) => theme.typography.overlineLarge.fontSize};
  line-height: ${({ theme }) => theme.typography.overlineLarge.lineHeight};

  font-weight: ${({ theme }) => theme.typography.overlineLarge.weight};

  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const OverlineMedium = styled.p<TypographyOverlineProps>`
  font-family: ${({ theme }) => theme.typography.overlineMedium.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  font-size: ${({ theme }) => theme.typography.overlineMedium.fontSize};
  line-height: ${({ theme }) => theme.typography.overlineMedium.lineHeight};

  font-weight: ${({ theme }) => theme.typography.overlineMedium.weight};

  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const OverlineSmall = styled.p<TypographyOverlineProps>`
  font-family: ${({ theme }) => theme.typography.overlineSmall.fontFamily};
  color: ${({ theme }) => theme.colors.neutral["900"]};

  font-size: ${({ theme }) => theme.typography.overlineSmall.fontSize};
  line-height: ${({ theme }) => theme.typography.overlineSmall.lineHeight};

  font-weight: ${({ theme }) => theme.typography.overlineSmall.weight};

  letter-spacing: 1px;
  text-transform: uppercase;
`;
