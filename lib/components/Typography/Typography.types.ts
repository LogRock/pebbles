import Theme from "../../types/theme";
import {
  colorTokens,
  shadeTokens,
  textTokens,
  titleTokens,
  weightTokens,
  spacingTokens,
} from "../../types/tokens";

/**
 * @deprecated in favor of TitleProps
 */
export type TypographyHeaderProps = {
  weight?: "normal" | "bold" | "bolder" | "boldest";
  theme: Theme;
  spaceAfter?: spacingTokens;
};

/**
 * @deprecated in favor of TextProps
 */
export type TypographyParagraphProps = {
  weight?: "normal" | "bold" | "bolder";
  theme: Theme;
  underlined?: boolean;
  italic?: boolean;
  strikedThrough?: boolean;
  spaceAfter?: spacingTokens;
};

/**
 * @deprecated in favor of TextProps
 */
export type TypographyOverlineProps = {
  theme: Theme;
  spaceAfter?: spacingTokens;
};

export type TitleProps = {
  color?: colorTokens;
  shade?: shadeTokens;
  type?: titleTokens;
  weight?: weightTokens;
  spaceAfter?: spacingTokens;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
};

export type TextProps = {
  color?: colorTokens;
  shade?: shadeTokens;
  type?: textTokens;
  weight?: weightTokens;
  spaceAfter?: spacingTokens;
  as?: "p" | "span" | "div" | "label";
  htmlFor?: string;
};
