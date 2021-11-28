import { Property } from "csstype";

interface Typography {
  regular?: {
    color?: Property.Color;
    fontSize?: Property.FontSize;
    fontWeight?: Property.FontWeight;
    textDecoration?: Property.TextDecoration;
  };
  inverted?: {
    color?: Property.Color;
    fontSize?: Property.FontSize;
    fontWeight?: Property.FontWeight;
    textDecoration?: Property.TextDecoration;
  };
}

interface NavItem {
  color?: Property.Color;
  background?: Property.BackgroundColor;
  border?: Property.BorderColor;
}

interface ColorVariations {
  lightest?: Property.Color;
  lighter?: Property.Color;
  light?: Property.Color;
  medium?: Property.Color;
  dark?: Property.Color;
  darker?: Property.Color;
  darkest?: Property.Color;
}

export interface Theme {
  breakpoints: {
    mobile: Property.Width;
    tablet: Property.Width;
    desktop: Property.Width;
    widescreen: Property.Width;
    fullhd: Property.Width;
  };
  colors?: {
    primary?: ColorVariations;
    secondary?: ColorVariations;
    status?: {
      success?: ColorVariations;
      info?: ColorVariations;
      warning?: ColorVariations;
      danger?: ColorVariations;
      neutral?: ColorVariations;
    };
    text?: {
      primary?: ColorVariations;
      secondary?: ColorVariations;
      inverted?: ColorVariations;
    };
  };
  spacings?: {
    xxxs: Property.Width;
    xxs: Property.Width;
    xs: Property.Width;
    sm: Property.Width;
    md: Property.Width;
    lg: Property.Width;
    xl: Property.Width;
    xxl: Property.Width;
    xxxl: Property.Width;
  };
  navbar?: {
    background?: Property.BackgroundColor;
    navigation?: {
      item?: {
        regular?: NavItem;
        active?: NavItem;
        hover?: NavItem;
      };
    };
  };
  typography?: {
    header1?: Typography;
    header2?: Typography;
    header3?: Typography;
    header4?: Typography;
    header5?: Typography;
    header6?: Typography;
    paragraph?: Typography;
    link?: Typography;
  };
}
