import { up } from "styled-breakpoints";
import styled, { css } from "styled-components";
import {
  TypographyParagraphProps,
  TypographyHeaderProps,
  TypographyOverlineProps,
  TitleProps,
  TextProps,
} from "./Typography.types";
import { spacingTokens } from "../../types/tokens";

const decorationsFromProps = ({
  underlined,
  strikedThrough,
}: TypographyParagraphProps) => {
  const decorations = [];
  if (underlined) decorations.push("underline");
  if (strikedThrough) decorations.push("line-through");
  return decorations.join(" ");
};

/**
 * @deprecated in favor of Title
 */
export const DisplayLarge = styled.h1<TypographyHeaderProps>`
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.displayLarge.fontFamily};
  font-size: ${({ theme }) => theme.typography.displayLarge.mobile.fontSize};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.displayLarge.mobile.weights[weight]
      : theme.typography.displayLarge.mobile.weights.normal};
  letter-spacing: ${({ theme }) =>
    theme.typography.displayLarge.mobile.tracking};
  line-height: ${({ theme }) =>
    theme.typography.displayLarge.mobile.lineHeight};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.displayLarge.desktop.fontSize};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.displayLarge.desktop.weights[weight]
        : theme.typography.displayLarge.desktop.weights.normal};
    letter-spacing: ${({ theme }) =>
      theme.typography.displayLarge.desktop.tracking};
    line-height: ${({ theme }) =>
      theme.typography.displayLarge.desktop.lineHeight};
  }
`;

/**
 * @deprecated in favor of Title
 */
export const DisplaySmall = styled.h2<TypographyHeaderProps>`
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.displaySmall.fontFamily};
  font-size: ${({ theme }) => theme.typography.displaySmall.mobile.fontSize};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.displaySmall.mobile.weights[weight]
      : theme.typography.displaySmall.mobile.weights.normal};
  letter-spacing: ${({ theme }) =>
    theme.typography.displaySmall.mobile.tracking};
  line-height: ${({ theme }) =>
    theme.typography.displaySmall.mobile.lineHeight};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.displaySmall.desktop.fontSize};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.displaySmall.desktop.weights[weight]
        : theme.typography.displaySmall.desktop.weights.normal};
    letter-spacing: ${({ theme }) =>
      theme.typography.displaySmall.desktop.tracking};
    line-height: ${({ theme }) =>
      theme.typography.displaySmall.desktop.lineHeight};
  }
`;

/**
 * @deprecated in favor of Title
 */
export const HeadingH1 = styled.h1<TypographyHeaderProps>`
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.headingH1.fontFamily};
  font-size: ${({ theme }) => theme.typography.headingH1.mobile.fontSize};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.headingH1.mobile.weights[weight]
      : theme.typography.headingH1.mobile.weights.normal};
  letter-spacing: ${({ theme }) => theme.typography.headingH1.mobile.tracking};
  line-height: ${({ theme }) => theme.typography.headingH1.mobile.lineHeight};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.headingH1.desktop.fontSize};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.headingH1.desktop.weights[weight]
        : theme.typography.headingH1.desktop.weights.normal};
    letter-spacing: ${({ theme }) =>
      theme.typography.headingH1.desktop.tracking};
    line-height: ${({ theme }) =>
      theme.typography.headingH1.desktop.lineHeight};
  }
`;

/**
 * @deprecated in favor of Title
 */
export const HeadingH2 = styled.h2<TypographyHeaderProps>`
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.headingH2.fontFamily};
  font-size: ${({ theme }) => theme.typography.headingH2.mobile.fontSize};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.headingH2.mobile.weights[weight]
      : theme.typography.headingH2.mobile.weights.normal};
  letter-spacing: ${({ theme }) => theme.typography.headingH2.mobile.tracking};
  line-height: ${({ theme }) => theme.typography.headingH2.mobile.lineHeight};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.headingH2.desktop.fontSize};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.headingH2.desktop.weights[weight]
        : theme.typography.headingH2.desktop.weights.normal};
    letter-spacing: ${({ theme }) =>
      theme.typography.headingH2.desktop.tracking};
    line-height: ${({ theme }) =>
      theme.typography.headingH2.desktop.lineHeight};
  }
`;

/**
 * @deprecated in favor of Title
 */
export const HeadingH3 = styled.h3<TypographyHeaderProps>`
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.headingH3.fontFamily};
  font-size: ${({ theme }) => theme.typography.headingH3.mobile.fontSize};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.headingH3.mobile.weights[weight]
      : theme.typography.headingH3.mobile.weights.normal};
  letter-spacing: ${({ theme }) => theme.typography.headingH3.mobile.tracking};
  line-height: ${({ theme }) => theme.typography.headingH3.mobile.lineHeight};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.headingH3.desktop.fontSize};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.headingH3.desktop.weights[weight]
        : theme.typography.headingH3.desktop.weights.normal};
    letter-spacing: ${({ theme }) =>
      theme.typography.headingH3.desktop.tracking};
    line-height: ${({ theme }) =>
      theme.typography.headingH3.desktop.lineHeight};
  }
`;

/**
 * @deprecated in favor of Title
 */
export const HeadingH4 = styled.h4<TypographyHeaderProps>`
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.headingH4.fontFamily};
  font-size: ${({ theme }) => theme.typography.headingH4.mobile.fontSize};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.headingH4.mobile.weights[weight]
      : theme.typography.headingH4.mobile.weights.normal};
  letter-spacing: ${({ theme }) => theme.typography.headingH4.mobile.tracking};
  line-height: ${({ theme }) => theme.typography.headingH4.mobile.lineHeight};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.headingH4.desktop.fontSize};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.headingH4.desktop.weights[weight]
        : theme.typography.headingH4.desktop.weights.normal};
    letter-spacing: ${({ theme }) =>
      theme.typography.headingH4.desktop.tracking};
    line-height: ${({ theme }) =>
      theme.typography.headingH4.desktop.lineHeight};
  }
`;

/**
 * @deprecated in favor of Title
 */
export const HeadingH5 = styled.h5<TypographyHeaderProps>`
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.headingH5.fontFamily};
  font-size: ${({ theme }) => theme.typography.headingH5.mobile.fontSize};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.headingH5.mobile.weights[weight]
      : theme.typography.headingH5.mobile.weights.normal};
  letter-spacing: ${({ theme }) => theme.typography.headingH5.mobile.tracking};
  line-height: ${({ theme }) => theme.typography.headingH5.mobile.lineHeight};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.headingH5.desktop.fontSize};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.headingH5.desktop.weights[weight]
        : theme.typography.headingH5.desktop.weights.normal};
    letter-spacing: ${({ theme }) =>
      theme.typography.headingH5.desktop.tracking};
    line-height: ${({ theme }) =>
      theme.typography.headingH5.desktop.lineHeight};
  }
`;

/**
 * @deprecated in favor of Title
 */
export const HeadingH6 = styled.h6<TypographyHeaderProps>`
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.headingH6.fontFamily};
  font-size: ${({ theme }) => theme.typography.headingH6.mobile.fontSize};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.headingH6.mobile.weights[weight]
      : theme.typography.headingH6.mobile.weights.normal};
  letter-spacing: ${({ theme }) => theme.typography.headingH6.mobile.tracking};
  line-height: ${({ theme }) => theme.typography.headingH6.mobile.lineHeight};

  ${up("desktop")} {
    font-size: ${({ theme }) => theme.typography.headingH6.desktop.fontSize};
    font-weight: ${({ theme, weight }) =>
      weight
        ? theme.typography.headingH6.desktop.weights[weight]
        : theme.typography.headingH6.desktop.weights.normal};
    letter-spacing: ${({ theme }) =>
      theme.typography.headingH6.desktop.tracking};
    line-height: ${({ theme }) =>
      theme.typography.headingH6.desktop.lineHeight};
  }
`;

/**
 * @deprecated in favor of Text
 */
export const ParagraphLarge = styled.p<TypographyParagraphProps>`
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.paragraphLarge.fontFamily};
  font-size: ${({ theme }) => theme.typography.paragraphLarge.desktop.fontSize};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.paragraphLarge.desktop.weights[weight]
      : theme.typography.paragraphLarge.desktop.weights.normal};
  line-height: ${({ theme }) =>
    theme.typography.paragraphLarge.desktop.lineHeight};
  text-decoration: ${decorationsFromProps};
`;

/**
 * @deprecated in favor of Text
 */
export const paragraphMediumCSS = css<TypographyParagraphProps>`
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.paragraphMedium.fontFamily};
  font-size: ${({ theme }) =>
    theme.typography.paragraphMedium.desktop.fontSize};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.paragraphMedium.desktop.weights[weight]
      : theme.typography.paragraphMedium.desktop.weights.normal};
  line-height: ${({ theme }) =>
    theme.typography.paragraphMedium.desktop.lineHeight};
  text-decoration: ${decorationsFromProps};
`;

/**
 * @deprecated in favor of Text
 */
export const ParagraphMedium = styled.p<TypographyParagraphProps>`
  ${paragraphMediumCSS}
`;

/**
 * @deprecated in favor of Text
 */
export const paragraphSmallCSS = css<TypographyParagraphProps>`
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.paragraphSmall.fontFamily};
  font-size: ${({ theme }) => theme.typography.paragraphSmall.desktop.fontSize};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.paragraphSmall.desktop.weights[weight]
      : theme.typography.paragraphSmall.desktop.weights.normal};
  line-height: ${({ theme }) =>
    theme.typography.paragraphSmall.desktop.lineHeight};
  text-decoration: ${decorationsFromProps};
`;

/**
 * @deprecated in favor of Text
 */
export const ParagraphSmall = styled.p<TypographyParagraphProps>`
  ${paragraphSmallCSS}
`;

/**
 * @deprecated in favor of Text
 */
export const paragraphXSmallCSS = css<TypographyParagraphProps>`
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.paragraphXSmall.fontFamily};
  font-size: ${({ theme }) =>
    theme.typography.paragraphXSmall.desktop.fontSize};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  font-weight: ${({ theme, weight }) =>
    weight
      ? theme.typography.paragraphXSmall.desktop.weights[weight]
      : theme.typography.paragraphXSmall.desktop.weights.normal};
  line-height: ${({ theme }) =>
    theme.typography.paragraphXSmall.desktop.lineHeight};
  text-decoration: ${decorationsFromProps};
`;

/**
 * @deprecated in favor of Text
 */
export const ParagraphXSmall = styled.p<TypographyParagraphProps>`
  ${paragraphXSmallCSS}
`;

/**
 * @deprecated in favor of Text
 */
export const OverlineLarge = styled.p<TypographyOverlineProps>`
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.overlineLarge.fontFamily};
  font-size: ${({ theme }) => theme.typography.overlineLarge.desktop.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.overlineLarge.desktop.weights.bold};
  letter-spacing: 1px;
  line-height: ${({ theme }) =>
    theme.typography.overlineLarge.desktop.lineHeight};
  text-transform: uppercase;
`;

/**
 * @deprecated in favor of Text
 */
export const OverlineMedium = styled.p<TypographyOverlineProps>`
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.overlineMedium.fontFamily};
  font-size: ${({ theme }) => theme.typography.overlineMedium.desktop.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.overlineMedium.desktop.weights.bold};
  letter-spacing: 1px;
  line-height: ${({ theme }) =>
    theme.typography.overlineMedium.desktop.lineHeight};
  text-transform: uppercase;
`;

/**
 * @deprecated in favor of Text
 */
export const overlineXSmallCSS = css<
  Pick<TypographyOverlineProps, "spaceAfter">
>`
  margin: 0;
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  color: ${({ theme }) => theme.colors.neutral["900"]};
  font-family: ${({ theme }) => theme.typography.overlineXSmall.fontFamily};
  font-size: ${({ theme }) => theme.typography.overlineXSmall.desktop.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.overlineXSmall.desktop.weights.bold};
  letter-spacing: 1px;
  line-height: ${({ theme }) =>
    theme.typography.overlineXSmall.desktop.lineHeight};
  text-transform: uppercase;
`;

/**
 * @deprecated in favor of Text
 */
export const OverlineXSmall = styled.p<TypographyOverlineProps>`
  ${overlineXSmallCSS}
`;

export const StyledTitle = styled.h1<TitleProps>`
  ${({
    theme,
    weight = "normal",
    color = "neutral",
    shade = "900",
    type = "headingH1",
    spaceAfter,
  }) => css`
    margin: 0;
    margin-bottom: ${spaceAfter
      ? theme.spacings?.[spaceAfter as spacingTokens]
      : 0};

    color: ${theme.colors[color][shade]};
    font-family: ${theme.typography[type].fontFamily};
    font-size: ${theme.typography[type].mobile.fontSize};
    font-weight: ${theme.typography[type].mobile.weights[weight]};
    letter-spacing: ${theme.typography[type].mobile.tracking};
    line-height: ${theme.typography[type].mobile.lineHeight};
    text-transform: ${theme.typography[type].textTransform};

    ${up("desktop")} {
      font-size: ${theme.typography[type].desktop.fontSize};
      font-weight: ${theme.typography[type].desktop.weights[weight]};
      letter-spacing: ${theme.typography[type].desktop.tracking};
      line-height: ${theme.typography[type].desktop.lineHeight};
    }
  `}
`;

export const StyledText = styled.p<TextProps>`
  ${({
    theme,
    weight = "normal",
    color = "neutral",
    shade = "900",
    type = "paragraphMedium",
    spaceAfter,
  }) => css`
    margin: 0;
    margin-bottom: ${spaceAfter
      ? theme.spacings?.[spaceAfter as spacingTokens]
      : 0};

    color: ${theme.colors[color][shade]};
    font-family: ${theme.typography[type].fontFamily};
    font-size: ${theme.typography[type].mobile.fontSize};
    font-weight: ${theme.typography[type].mobile.weights[weight]};
    letter-spacing: ${theme.typography[type].mobile.tracking};
    line-height: ${theme.typography[type].mobile.lineHeight};
    text-transform: ${theme.typography[type].textTransform};

    ${up("desktop")} {
      font-size: ${theme.typography[type].desktop.fontSize};
      font-weight: ${theme.typography[type].desktop.weights[weight]};
      letter-spacing: ${theme.typography[type].desktop.tracking};
      line-height: ${theme.typography[type].desktop.lineHeight};
    }
  `}
`;
