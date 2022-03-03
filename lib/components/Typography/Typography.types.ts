import Theme from "../../types/theme";

export type TypographyHeaderProps = {
  weight?: "normal" | "bold" | "bolder" | "boldest";
  theme: Theme;
};

export type TypographyParagraphProps = {
  weight?: "normal" | "bold" | "bolder";
  theme: Theme;
  underlined?: boolean;
  italic?: boolean;
  strikedThrough?: boolean;
};

export type TypographyOverlineProps = {
  theme: Theme;
};
