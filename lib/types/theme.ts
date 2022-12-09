import * as CSS from "csstype";
import {
  STATUS_TAG_SIZES,
  STATUS_TAG_VARIANTS,
} from "../components/StatusTag/StatusTag.types";

export interface Spacings {
  xxsm: CSS.Property.Width;
  xsm: CSS.Property.Width;
  sm: CSS.Property.Width;
  md: CSS.Property.Width;
  big: CSS.Property.Width;
  xbig: CSS.Property.Width;
  xxbig: CSS.Property.Width;
  xxxbig: CSS.Property.Width;
  lg: CSS.Property.Width;
  xlg: CSS.Property.Width;
  xxlg: CSS.Property.Width;
  xxxlg: CSS.Property.Width;
  huge: CSS.Property.Width;
  xhuge: CSS.Property.Width;
  xxhuge: CSS.Property.Width;
  xxxhuge: CSS.Property.Width;
}

interface Color {
  50: CSS.Property.Color;
  100: CSS.Property.Color;
  200: CSS.Property.Color;
  300: CSS.Property.Color;
  400: CSS.Property.Color;
  500: CSS.Property.Color;
  600: CSS.Property.Color;
  700: CSS.Property.Color;
  800: CSS.Property.Color;
  900: CSS.Property.Color;
}

interface Colors {
  neutral: Color;
  primary: Color;
  secondary: Color;
  success: Color;
  warning: Color;
  error: Color;
  shades: {
    0: CSS.Property.Color;
    100: CSS.Property.Color;
  };
}

export interface HeaderProps {
  fontFamily: CSS.Property.FontFamily;
  desktop: {
    weights: {
      normal: CSS.Property.FontWeight;
      bold: CSS.Property.FontWeight;
      bolder: CSS.Property.FontWeight;
      boldest: CSS.Property.FontWeight;
    };
    fontSize: CSS.Property.FontSize;
    lineHeight: CSS.Property.LineHeight;
    tracking: CSS.Property.LetterSpacing;
  };
  mobile: {
    weights: {
      normal: CSS.Property.FontWeight;
      bold: CSS.Property.FontWeight;
      bolder: CSS.Property.FontWeight;
      boldest: CSS.Property.FontWeight;
    };
    fontSize: CSS.Property.FontSize;
    lineHeight: CSS.Property.LineHeight;
    tracking: CSS.Property.LetterSpacing;
  };
}

export interface ParagraphProps {
  fontFamily: CSS.Property.FontFamily;
  fontSize: CSS.Property.FontSize;
  lineHeight: CSS.Property.LineHeight;
  weights: {
    normal: CSS.Property.FontWeight;
    bold: CSS.Property.FontWeight;
    bolder: CSS.Property.FontWeight;
  };
}

export interface OverlineProps {
  fontFamily: CSS.Property.FontFamily;
  fontSize: CSS.Property.FontSize;
  lineHeight: CSS.Property.LineHeight;
  weight: CSS.Property.FontWeight;
  textTransform: CSS.Property.TextTransform;
}

interface Typography {
  displayLarge: HeaderProps;
  displaySmall: HeaderProps;
  headingH1: HeaderProps;
  headingH2: HeaderProps;
  headingH3: HeaderProps;
  headingH4: HeaderProps;
  headingH5: HeaderProps;
  headingH6: HeaderProps;
  paragraphLarge: ParagraphProps;
  paragraphMedium: ParagraphProps;
  paragraphSmall: ParagraphProps;
  paragraphXSmall: ParagraphProps;
  overlineLarge: OverlineProps;
  overlineMedium: OverlineProps;
  overlineXSmall: OverlineProps;
}

export interface Shadows {
  xSmall: CSS.Property.BoxShadow;
  small: CSS.Property.BoxShadow;
  medium: CSS.Property.BoxShadow;
  large: CSS.Property.BoxShadow;
  xLarge: CSS.Property.BoxShadow;
  xxLarge: CSS.Property.BoxShadow;
  upXSmall: CSS.Property.BoxShadow;
  upSmall: CSS.Property.BoxShadow;
  upMedium: CSS.Property.BoxShadow;
  upLarge: CSS.Property.BoxShadow;
  upXLarge: CSS.Property.BoxShadow;
  upXxLarge: CSS.Property.BoxShadow;
}

interface Blurs {
  none: CSS.Property.Width;
  small: CSS.Property.Width;
  medium: CSS.Property.Width;
  large: CSS.Property.Width;
  xLarge: CSS.Property.Width;
}

interface LinearGradient {
  background: CSS.Property.Background;
  colors: CSS.Property.Color[];
  angle: number;
}

// interface MeshGradient {
//   background: CSS.Property.BackgroundColor;
//   mesh: CSS.Property.BackgroundImage;
// }

interface Gradients {
  sunburst: LinearGradient;
  darkWineSea: LinearGradient;
  cherryCola: LinearGradient;
  coldSky: LinearGradient;
  oliveGarden: LinearGradient;
  morningSakura: LinearGradient;
  blueMoon: LinearGradient;
  synthwave: LinearGradient;
  teaLeaves: LinearGradient;
  blueberryWine: LinearGradient;
  // chillNight: MeshGradient
  // sunrise: MeshGradient
  // kingCrimsom: MeshGradient
  // crazyDiamond: MeshGradient
  // sunsetOverdrive: MeshGradient
  // auroraBorealis: MeshGradient
  // emeraldSplash: MeshGradient
  // overcast: MeshGradient
  // feverish: MeshGradient
  // spriteCrush: MeshGradient
}

interface ButtonStyle {
  background: CSS.Property.BackgroundColor;
  borderColor: CSS.Property.BorderColor;
  borderWidth: CSS.Property.BorderWidth;
  contentColor: CSS.Property.Color;
  textDecorationLine?: CSS.Property.TextDecorationLine;
  borderRadius?: CSS.Property.BorderRadius;
  boxShadow?: CSS.Property.BoxShadow;
  filter?: CSS.Property.Filter;
}

export interface ButtonVariant {
  primary: ButtonStyle;
  secondary: ButtonStyle;
  tertiary: ButtonStyle;
  outlined: ButtonStyle;
}

interface ButtonSize {
  verticalPadding: CSS.Property.PaddingTop;
  horizontalPadding: CSS.Property.PaddingLeft;
  fontSize: CSS.Property.FontSize;
  iconPadding: CSS.Property.Padding;
  borderRadius: CSS.Property.BorderRadius;
}

interface IconButtonSize {
  paddingTop: CSS.Property.PaddingTop;
  paddingLeft: CSS.Property.PaddingLeft;
  paddingBottom: CSS.Property.PaddingBottom;
  paddingRight: CSS.Property.PaddingRight;
  fontSize: CSS.Property.FontSize;
  borderRadius: CSS.Property.BorderRadius;
}

export interface Buttons {
  fontFamily: CSS.Property.FontFamily;
  fontWeight: CSS.Property.FontWeight;
  outline: CSS.Property.Outline;
  regular: {
    large: ButtonSize;
    medium: ButtonSize;
    small: ButtonSize;
    xSmall: ButtonSize;
    primary: ButtonVariant;
    destructive: ButtonVariant;
    disabled: ButtonVariant;
    rounded: ButtonVariant;
  };
  icon: {
    large: IconButtonSize;
    medium: IconButtonSize;
    small: IconButtonSize;
    xSmall: IconButtonSize;
    primary: ButtonVariant;
    destructive: ButtonVariant;
    disabled: ButtonVariant;
  };
}

export interface Focused {
  boxSizing: CSS.Property.BoxSizing;
  boxShadow: CSS.Property.BoxShadow;
  borderRadius: CSS.Property.BorderRadius;
  border: CSS.Property.Border;
}

export interface InputBox {
  spacing?: CSS.Property.MarginTop;
  padding: CSS.Property.Padding;
  boxSizing: CSS.Property.BoxSizing;
  boxShadow: CSS.Property.BoxShadow;
  borderRadius: CSS.Property.BorderRadius;
  border: CSS.Property.Border;
  margin: CSS.Property.Margin;
  background: CSS.Property.Background;
  height: CSS.Property.Height;
  width: CSS.Property.Width;

  placeholder: {
    color: CSS.Property.Color;
  };

  error: {
    color: CSS.Property.Color;
    border: CSS.Property.Border;
    boxShadow: CSS.Property.BoxShadow;
    hintColor: CSS.Property.Color;
    focused: Focused;
  };
  info: {
    color: CSS.Property.Color;
    border: CSS.Property.Border;
    boxShadow: CSS.Property.BoxShadow;
    hintColor: CSS.Property.Color;
    focused: Focused;
  };
  disabled: {
    boxSizing: CSS.Property.BoxSizing;
    boxShadow: CSS.Property.BoxShadow;
    border: CSS.Property.Border;
  };
  label: {
    color: CSS.Property.Color;
    fontStyle: CSS.Property.FontStyle;
    fontSize: CSS.Property.FontSize;
    fontWeight: CSS.Property.FontWeight;
    lineHeight: CSS.Property.LineHeight;
  };
  helper: {
    color: CSS.Property.Color;
    fontStyle: CSS.Property.FontStyle;
    fontSize: CSS.Property.FontSize;
    fontWeight: CSS.Property.FontWeight;
    lineHeight: CSS.Property.LineHeight;
    margin: CSS.Property.Margin;
  };
  hint: {
    background: CSS.Property.Background;
    top: CSS.Property.Inset;
    right: CSS.Property.Inset;
    margin: CSS.Property.Margin;
  };
}

export interface Select {
  items: {
    hover: {
      background: CSS.Property.Background;
    };
    shadow: "1px 1px 2px rgba(0, 0, 0, 0.3)";
  };
}

export interface CheckBoc {
  background: CSS.Property.Background;
  borderColor: CSS.Property.BorderColor;
  borderWidth: CSS.Property.BorderWidth;
  borderRadius: CSS.Property.BorderRadius;
  borderStyle: CSS.Property.BorderStyle;
}
export interface CheckBox {
  checkMark: {
    color: CSS.Property.Color;
    width: CSS.Property.Width;
    height: CSS.Property.Height;
    top: CSS.Property.Top;
    left: CSS.Property.Left;
  };
  width: CSS.Property.Width;
  height: CSS.Property.Height;
  marginRight: CSS.Property.MarginRight;
  default: CheckBoc;
  checked: CheckBoc;
}

export interface Loader {
  fontFamily: CSS.Property.FontFamily;
  size: CSS.Property.Width;
  background: CSS.Property.Color;
  loaderColor: {
    background: CSS.Property.Color;
    loaderBar: CSS.Property.Color;
  };
}

interface AlertColor {
  descriptionColor: CSS.Property.Color;
  background: CSS.Property.Background;
  borderColor: CSS.Property.Color;
  iconColor: CSS.Property.Color;
  titleColor: CSS.Property.Color;
}

export interface Alert {
  neutral: AlertColor;
  primary: AlertColor;
  warning: AlertColor;
  success: AlertColor;
  /**
   * @deprecated in favor of destructive
   */
  error: AlertColor;
  destructive: AlertColor;
  title: {
    fontSize: CSS.Property.FontSize;
    fontWeight: CSS.Property.FontWeight;
    lineHeight: CSS.Property.LineHeight;
    height: CSS.Property.Height;
  };
  description: {
    fontSize: CSS.Property.FontSize;
    fontWeight: CSS.Property.FontWeight;
    lineHeight: CSS.Property.LineHeight;
    height: CSS.Property.Height;
  };
  iconSize: CSS.Property.FontSize;
  fontFamily: CSS.Property.FontFamily;
  borderRadius: CSS.Property.BorderRadius;
}

export interface ProgressBar {
  barColor: CSS.Property.Color;
  bgColor: CSS.Property.Color;
  sizes: {
    small: CSS.Property.Width;
    medium: CSS.Property.Width;
    large: CSS.Property.Width;
    xLarge: CSS.Property.Width;
  };
  borderRadius: {
    small: CSS.Property.Width;
    medium: CSS.Property.Width;
    large: CSS.Property.Width;
    xLarge: CSS.Property.Width;
  };
}

export interface ProgressRing {
  ringForegroundColor: {
    primary: CSS.Property.Color;
    secondary: CSS.Property.Color;
    error: CSS.Property.Color;
    warning: CSS.Property.Color;
    success: CSS.Property.Color;
    neutral: CSS.Property.Color;
  };
  ringBackgroundColor: {
    primary: CSS.Property.Color;
    secondary: CSS.Property.Color;
    error: CSS.Property.Color;
    warning: CSS.Property.Color;
    success: CSS.Property.Color;
    neutral: CSS.Property.Color;
  };
}

export interface List {
  item: {
    paddingY: CSS.Property.PaddingLeft;
    paddingX: CSS.Property.PaddingTop;
    internalPadding: CSS.Property.Padding;
    margin: CSS.Property.Margin;
    shadow: CSS.Property.BoxShadow;
    background: {
      regular: CSS.Property.BackgroundColor;
      hover: CSS.Property.BackgroundColor;
      active: CSS.Property.BackgroundColor;
    };
    borderRadius: CSS.Property.BorderRadius;
    label: {
      color: CSS.Property.Color;
      weight: CSS.Property.FontWeight;
    };
    description: {
      color: CSS.Property.Color;
      weight: CSS.Property.FontWeight;
    };
    large: {
      typography: ParagraphProps;
    };
    medium: {
      typography: ParagraphProps;
    };
    small: {
      typography: ParagraphProps;
    };
  };
}

export interface Toggle {
  indicator: {
    color: CSS.Property.Color;
    width: CSS.Property.Width;
    height: CSS.Property.Height;
    left1: CSS.Property.Left;
    left2: CSS.Property.Left;
    top: CSS.Property.Top;
  };
  width: CSS.Property.Width;
  height: CSS.Property.Height;
  borderRadius: CSS.Property.BorderRadius;
  marginRight: CSS.Property.MarginRight;
  default: CheckBoc;
  checked: CheckBoc;
}

interface ColorByVariant {
  error: CSS.Property.Color;
  errorAlt?: CSS.Property.Color;
  warning: CSS.Property.Color;
  warningAlt?: CSS.Property.Color;
  success: CSS.Property.Color;
  neutral: CSS.Property.Color;
}

export interface StatusNumber {
  iconColor: ColorByVariant;
  labelColor: ColorByVariant;
}

export interface StatusTrend {
  iconColor: {
    positive: CSS.Property.Color;
    negative: CSS.Property.Color;
    neutral: CSS.Property.Color;
  };
  labelColor: {
    positive: CSS.Property.Color;
    negative: CSS.Property.Color;
    neutral: CSS.Property.Color;
  };
  fontSize: CSS.Property.FontSize;
  fontWeight: CSS.Property.FontWeight;
}

export interface StatusTag {
  color: {
    background: Record<STATUS_TAG_VARIANTS, CSS.Property.BackgroundColor>;
    content: Record<STATUS_TAG_VARIANTS, CSS.Property.Color>;
  };
  paddingX: Record<STATUS_TAG_SIZES, CSS.Property.Width>;
  paddingY: Record<STATUS_TAG_SIZES, CSS.Property.Width>;
  typography: Record<STATUS_TAG_SIZES, OverlineProps>;
  radius: Record<STATUS_TAG_SIZES, CSS.Property.BorderRadius>;
}

export interface StatusPercentage {
  fontFamily: CSS.Property.FontFamily;
  fontWeight: CSS.Property.FontWeight;
  fontSize: {
    small: CSS.Property.FontSize;
    medium: CSS.Property.FontSize;
    large: CSS.Property.FontSize;
  };
}

export interface Card {
  fontFamily: CSS.Property.FontFamily;
  fontWeight: CSS.Property.FontWeight;
  fontSize: CSS.Property.FontSize;
}

export interface TabView {
  fontFamily: CSS.Property.FontFamily;
  fontWeight: CSS.Property.FontWeight;
  fontSize: CSS.Property.FontSize;
}

export interface Icons {
  size: CSS.Property.FontSize;
  color: CSS.Property.Color;
  spacing: CSS.Property.Margin;

  menu: {
    active: {
      color: CSS.Property.Color;
    };
  };

  input: {
    helper: {
      color: CSS.Property.Color;
    };
    dropdown: {
      color: CSS.Property.Color;
    };
  };

  button: {
    xSmall: {
      paddingTop: CSS.Property.MarginTop;
      paddingRight: CSS.Property.MarginRight;
      paddingBottom: CSS.Property.MarginBottom;
      paddingLeft: CSS.Property.MarginLeft;
    };
    small: {
      paddingTop: CSS.Property.MarginTop;
      paddingRight: CSS.Property.MarginRight;
      paddingBottom: CSS.Property.MarginBottom;
      paddingLeft: CSS.Property.MarginLeft;
    };
    medium: {
      paddingTop: CSS.Property.MarginTop;
      paddingRight: CSS.Property.MarginRight;
      paddingBottom: CSS.Property.MarginBottom;
      paddingLeft: CSS.Property.MarginLeft;
    };
    large: {
      paddingTop: CSS.Property.MarginTop;
      paddingRight: CSS.Property.MarginRight;
      paddingBottom: CSS.Property.MarginBottom;
      paddingLeft: CSS.Property.MarginLeft;
    };
  };

  table: {
    pageSizeSelector: {
      size: CSS.Property.FontSize;
      spacing: CSS.Property.Margin;
    };
    ordering: {
      spacing: CSS.Property.Margin;
    };
    pagination: {
      spacing: CSS.Property.Margin;
    };
  };

  tabs: {
    spacing: CSS.Property.Margin;
    color: CSS.Property.Color;
    active: {
      color: CSS.Property.Color;
    };
  };

  panel: {
    color: CSS.Property.Color;
    spacing: CSS.Property.Margin;
  };

  alerts: {
    spacing: CSS.Property.Margin;
    destructive: {
      color: CSS.Property.Color;
    };
    warning: {
      color: CSS.Property.Color;
    };
    neutral: {
      color: CSS.Property.Color;
    };
    primary: {
      color: CSS.Property.Color;
    };
    success: {
      color: CSS.Property.Color;
    };
  };

  tags: {
    spacing: CSS.Property.Margin;
    destructive: {
      color: CSS.Property.Color;
    };
    destructiveAlt: {
      color: CSS.Property.Color;
    };
    warning: {
      color: CSS.Property.Color;
    };
    success: {
      color: CSS.Property.Color;
    };
  };

  modal: {
    size: CSS.Property.FontSize;
  };
}

export default interface Theme {
  breakpoints: {
    mobile: string;
    desktop: string;
  };
  name: string;
  spacings: Spacings;
  colors: Colors;
  typography: Typography;
  shadows: Shadows;
  blurs: Blurs;
  gradients: Gradients;
  buttons: Buttons;
  inputBox: InputBox;
  select: Select;
  checkBox: CheckBox;
  loader: Loader;
  alert: Alert;
  progressBar: ProgressBar;
  progressRing: ProgressRing;
  list: List;
  toggle: Toggle;
  statusNumber: StatusNumber;
  statusTag: StatusTag;
  statusPercentage: StatusPercentage;
  statusTrend: StatusTrend;
  card: Card;
  tabView: TabView;
  icons: Icons;
}
