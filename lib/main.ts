// expose Themes
export { light as lightTheme } from "./theme";
export { dark as darkTheme } from "./theme";
export type { default as Theme } from "./types/theme";

// expose Typography
export {
  DisplayLarge,
  DisplaySmall,
  HeadingH1,
  HeadingH2,
  HeadingH3,
  HeadingH4,
  HeadingH5,
  HeadingH6,
  OverlineLarge,
  OverlineMedium,
  OverlineSmall,
  ParagraphLarge,
  ParagraphMedium,
  ParagraphSmall,
  ParagraphXSmall,
} from "./components/Typography";
export type {
  TypographyHeaderProps,
  TypographyOverlineProps,
  TypographyParagraphProps,
} from "./components/Typography";

// expose Button
export { default as Button } from "./components/Button";
export type { ButtonProps } from "./components/Button";
