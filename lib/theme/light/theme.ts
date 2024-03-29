import Theme, {
  Buttons,
  ButtonVariant,
  CheckBox,
  InputBox,
  Select,
  Loader,
  Alert,
  ProgressBar,
  ProgressRing,
  List,
  Toggle,
  StatusNumber,
  StatusTag,
  StatusPercentage,
  StatusTrend,
  Card,
  TabView,
  Icons,
} from "../../types/theme";
import {
  neutral,
  primary,
  secondary,
  success,
  warning,
  destructive,
  white,
  black,
} from "./colors";
import {
  displayLarge,
  displaySmall,
  headingH1,
  headingH2,
  headingH3,
  headingH4,
  headingH5,
  headingH6,
  overlineLarge,
  overlineMedium,
  overlineXSmall,
  paragraphLarge,
  paragraphMedium,
  paragraphSmall,
  paragraphXSmall,
} from "./typography";
import {
  sunburst,
  blueMoon,
  blueberryWine,
  cherryCola,
  coldSky,
  darkWineSea,
  morningSakura,
  oliveGarden,
  synthwave,
  teaLeaves,
} from "./gradients";
import {
  STATUS_TAG_SIZES,
  STATUS_TAG_VARIANTS,
} from "../../components/StatusTag/StatusTag.types";
import { spacingTokens } from "../../types/tokens";

const spacings: Record<spacingTokens, string> = {
  zero: "0",
  xxxxsm: "1px",
  xxxsm: "2px",
  xxsm: "4px",
  xsm: "8px",
  sm: "12px",
  md: "16px",
  big: "20px",
  xbig: "24px",
  xxbig: "28px",
  xxxbig: "32px",
  lg: "40px",
  xlg: "48px",
  xxlg: "64px",
  xxxlg: "80px",
  huge: "96px",
  xhuge: "128px",
  xxhuge: "160px",
  xxxhuge: "192px",
};

const shadows = {
  none: "none",
  xSmall: "0px 1px 2px rgba(16, 24, 40, 0.05)",
  small:
    "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)",
  medium:
    "0px 4px 6px -1px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.1)",
  large:
    "0px 10px 15px -3px rgba(16, 24, 40, 0.1), 0px 4px 6px -4px rgba(16, 24, 40, 0.1)",
  xLarge:
    "0px 20px 25px -5px rgba(16, 24, 40, 0.1), 0px 8px 10px -6px rgba(16, 24, 40, 0.1)",
  xxLarge: "0px 25px 50px -12px rgba(16, 24, 40, 0.25)",
  upXSmall: "0px -1px 2px rgba(16, 24, 40, 0.05)",
  upSmall:
    "0px -1px 3px rgba(16, 24, 40, 0.1), 0px -1px 2px -1px rgba(16, 24, 40, 0.1)",
  upMedium:
    "0px -4px 6px -1px rgba(16, 24, 40, 0.1), 0px -2px 4px -2px rgba(16, 24, 40, 0.1)",
  upLarge:
    "0px -10px 15px -3px rgba(16, 24, 40, 0.1), 0px -4px 6px -4px rgba(16, 24, 40, 0.1)",
  upXLarge:
    "0px -20px 25px -5px rgba(16, 24, 40, 0.1), 0px -8px 10px -6px rgba(16, 24, 40, 0.1)",
  upXxLarge: "0px -25px 50px -12px rgba(16, 24, 40, 0.25)",
};

const icons: Icons = {
  size: spacings.big,
  color: neutral[600],
  spacing: spacings.sm,

  menu: {
    active: {
      color: neutral[900],
    },
  },

  input: {
    helper: {
      color: neutral[400],
    },
    dropdown: {
      color: neutral[600],
    },
  },

  button: {
    xSmall: {
      paddingTop: spacings.xsm,
      paddingRight: spacings.sm,
      paddingBottom: spacings.xsm,
      paddingLeft: spacings.sm,
    },
    small: {
      paddingTop: "10px",
      paddingRight: spacings.md,
      paddingBottom: "10px",
      paddingLeft: spacings.md,
    },
    medium: {
      paddingTop: "10px",
      paddingRight: spacings.md,
      paddingBottom: "10px",
      paddingLeft: spacings.md,
    },
    large: {
      paddingTop: spacings.md,
      paddingRight: spacings.xbig,
      paddingBottom: spacings.md,
      paddingLeft: spacings.xbig,
    },
  },

  table: {
    pageSizeSelector: {
      size: spacings.md,
      spacing: `10px ${spacings.xsm}`,
    },
    ordering: {
      spacing: spacings.xxsm,
    },
    pagination: {
      spacing: spacings.xlg,
    },
  },

  tabs: {
    spacing: `${spacings.md} ${spacings.xsm} ${spacings.md} ${spacings.xsm}`,
    color: neutral[400],
    active: {
      color: neutral[900],
    },
  },

  panel: {
    color: neutral[600],
    spacing: ` ${spacings.md} ${spacings.sm}`,
  },

  alerts: {
    spacing: `${spacings.sm} ${spacings.xsm} ${spacings.sm} ${spacings.big}`,
    destructive: {
      color: destructive[500],
    },
    warning: {
      color: warning[500],
    },
    neutral: {
      color: neutral[500],
    },
    primary: {
      color: primary[600],
    },
    success: {
      color: success[600],
    },
    secondary: {
      color: secondary[600],
    },
  },

  tags: {
    spacing: `${spacings.xsm} ${spacings.xsm} ${spacings.xsm} ${spacings.md}`,
    destructive: {
      color: destructive[500],
    },
    destructiveAlt: {
      color: destructive[50],
    },
    warning: {
      color: warning[500],
    },
    success: {
      color: success[600],
    },
  },

  modal: {
    size: spacings.xbig,
  },
};

const primaryVariant: ButtonVariant = {
  primary: {
    background: primary["500"],
    borderColor: primary["500"],
    borderWidth: 0,
    contentColor: "black",
    boxShadow: shadows.small,
    filter: "drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1))",
  },
  secondary: {
    background: neutral["900"],
    borderColor: neutral["900"],
    borderWidth: 0,
    contentColor: neutral["50"],
    boxShadow: shadows.small,
    filter: "drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1))",
  },
  tertiary: {
    background: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
    contentColor: neutral["900"],
    textDecorationLine: "none",
  },
  outlined: {
    background: white[500],
    borderColor: neutral["300"],
    borderWidth: "1px",
    contentColor: neutral["700"],
  },
};

const destructiveVariant: ButtonVariant = {
  primary: {
    background: destructive["500"],
    borderColor: destructive["500"],
    borderWidth: 0,
    contentColor: "white",
    boxShadow: shadows.small,
    filter: "drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1))",
  },
  secondary: {
    background: destructive["50"],
    borderColor: destructive["50"],
    borderWidth: 0,
    contentColor: destructive["600"],
    boxShadow: shadows.small,
    filter: "drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1))",
  },
  tertiary: {
    background: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
    contentColor: destructive["600"],
    textDecorationLine: "none",
  },
  outlined: {
    background: white[500],
    borderColor: destructive["300"],
    borderWidth: "1px",
    contentColor: destructive["500"],
  },
};

const disabledVariant: ButtonVariant = {
  primary: {
    background: neutral["200"],
    borderColor: neutral["200"],
    borderWidth: 0,
    contentColor: neutral["400"],
    boxShadow: shadows.small,
    filter: "drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1))",
  },
  secondary: {
    background: neutral["200"],
    borderColor: neutral["200"],
    borderWidth: 0,
    contentColor: neutral["400"],
    boxShadow: shadows.small,
    filter: "drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1))",
  },
  tertiary: {
    background: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
    contentColor: neutral["300"],
    textDecorationLine: "none",
  },
  outlined: {
    background: white[500],
    borderColor: neutral["400"],
    borderWidth: "1px",
    contentColor: neutral["300"],
  },
};

const roundedVariant: ButtonVariant = {
  primary: {
    background: primary["500"],
    borderColor: primary["500"],
    borderWidth: 0,
    contentColor: "black",
    borderRadius: "100px",
    boxShadow: shadows.small,
    filter: "drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1))",
  },
  secondary: {
    background: neutral["900"],
    borderColor: neutral["900"],
    borderWidth: 0,
    contentColor: neutral["50"],
    borderRadius: "100px",
    boxShadow: shadows.small,
    filter: "drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1))",
  },
  tertiary: {
    background: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
    contentColor: neutral["900"],
    textDecorationLine: "none",
    borderRadius: "100px",
  },
  outlined: {
    background: white[500],
    borderColor: neutral["300"],
    borderWidth: "1px",
    contentColor: neutral["700"],
    borderRadius: "100px",
  },
};

const buttons: Buttons = {
  fontFamily: "Archivo, sans-serif",
  fontWeight: 500,
  outline: `3px solid ${primary[200]}`,
  regular: {
    xSmall: {
      borderRadius: "6px",
      fontSize: "14px",
      iconPadding: spacings.xxsm,
      horizontalPadding: "10px",
      verticalPadding: "6px",
    },
    small: {
      borderRadius: "6px",
      fontSize: "14px",
      iconPadding: spacings.xxsm,
      horizontalPadding: spacings.md,
      verticalPadding: spacings.xsm,
    },
    medium: {
      borderRadius: "6px",
      fontSize: "16px",
      iconPadding: spacings.xxsm,
      horizontalPadding: spacings.big,
      verticalPadding: spacings.xsm,
    },
    large: {
      borderRadius: "6px",
      fontSize: "18px",
      iconPadding: spacings.xxsm,
      horizontalPadding: spacings.xbig,
      verticalPadding: "14px",
    },
    primary: primaryVariant,
    destructive: destructiveVariant,
    disabled: disabledVariant,
    rounded: roundedVariant,
  },
  icon: {
    xSmall: {
      borderRadius: "6px",
      fontSize: icons.size,
      paddingTop: icons.button.xSmall.paddingTop,
      paddingRight: icons.button.xSmall.paddingTop,
      paddingBottom: icons.button.xSmall.paddingTop,
      paddingLeft: icons.button.xSmall.paddingTop,
    },
    small: {
      borderRadius: "6px",
      fontSize: icons.size,
      paddingTop: icons.button.small.paddingTop,
      paddingRight: icons.button.small.paddingTop,
      paddingBottom: icons.button.small.paddingTop,
      paddingLeft: icons.button.small.paddingTop,
    },
    medium: {
      borderRadius: "6px",
      fontSize: icons.size,
      paddingTop: icons.button.medium.paddingTop,
      paddingRight: icons.button.medium.paddingTop,
      paddingBottom: icons.button.medium.paddingTop,
      paddingLeft: icons.button.medium.paddingTop,
    },
    large: {
      borderRadius: "6px",
      fontSize: icons.size,
      paddingTop: icons.button.large.paddingTop,
      paddingRight: icons.button.large.paddingTop,
      paddingBottom: icons.button.large.paddingTop,
      paddingLeft: icons.button.large.paddingTop,
    },
    primary: primaryVariant,
    destructive: destructiveVariant,
    disabled: disabledVariant,
  },
};

const inputBox: InputBox = {
  spacing: spacings.xxbig,
  padding: `10px ${spacings.sm}`,
  boxSizing: "border-box",
  boxShadow: shadows.xSmall,
  borderRadius: "8px",
  border: `1px solid ${neutral[200]}`,
  background: "white",
  height: "40px",
  width: "100%",
  fontSize: paragraphMedium.desktop.fontSize,

  destructive: {
    color: destructive[900],
    helperColor: destructive[400],
    border: `1px solid ${destructive[500]}`,
    boxShadow: shadows.small,
    hintColor: neutral[500],
    focused: {
      boxSizing: "border-box",
      boxShadow: `0px 0px 0px ${spacings.xxsm} ${destructive["100"]}`,
      borderRadius: "2px",
      border: `1px solid ${destructive["300"]}`,
    },
  },
  info: {
    color: neutral[900],
    helperColor: neutral[400],
    border: `1px solid ${neutral[200]}`,
    boxShadow: shadows.small,
    hintColor: neutral[500],
    focused: {
      boxSizing: "border-box",
      boxShadow: `0px 0px 0px 4px ${primary["100"]}`,
      borderRadius: "2px",
      border: `1px solid ${primary["300"]}`,
    },
  },

  label: {
    color: neutral[500],
    fontStyle: "normal",
    fontSize: "11px",
    lineHeight: "20px",
    fontWeight: 600,
  },
  helper: {
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    margin: spacings.xsm,
  },
  disabled: {
    boxSizing: "border-box",
    boxShadow: shadows.xSmall,
    border: `1px solid ${neutral["300"]}`,
  },
  hint: {
    background: "white",
    top: "1px",
    right: "2px",
    margin: "1px 0px",
  },
  placeholder: {
    color: neutral[400],
  },
};

const select: Select = {
  items: {
    hover: {
      background: primary["50"],
    },
    shadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
  },
};

const checkBox: CheckBox = {
  checkMark: {
    color: "white",
    width: spacings.xxsm,
    height: spacings.sm,
    left: "50%",
    top: "50%",
  },
  width: spacings.xbig,
  height: spacings.xbig,
  marginRight: spacings.sm,
  default: {
    background: "white",
    borderColor: neutral[300],
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: spacings.xxxsm,
  },
  checked: {
    background: primary["500"],
    borderColor: primary["500"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: spacings.xxxsm,
  },
};

const loader: Loader = {
  fontFamily: "Archivo",
  size: "50px",
  background: "white",
  loaderColor: {
    loaderBar: primary[500],
    background: primary[50],
  },
};

const alert: Alert = {
  colors: {
    white: {
      backgroundColor: "white",
      backgroundShade: "500",
      iconColor: "black",
      iconShade: "500",
      textColor: "black",
      textShade: "500",
    },
    black: {
      backgroundColor: "black",
      backgroundShade: "500",
      iconColor: "white",
      iconShade: "500",
      textColor: "white",
      textShade: "500",
    },
    secondary: {
      backgroundColor: "secondary",
      backgroundShade: "50",
      iconColor: "secondary",
      iconShade: "800",
      textColor: "secondary",
      textShade: "700",
    },
    neutral: {
      backgroundColor: "neutral",
      backgroundShade: "50",
      iconColor: "neutral",
      iconShade: "800",
      textColor: "neutral",
      textShade: "700",
    },
    primary: {
      backgroundColor: "primary",
      backgroundShade: "50",
      iconColor: "primary",
      iconShade: "500",
      textColor: "neutral",
      textShade: "900",
    },
    success: {
      backgroundColor: "success",
      backgroundShade: "50",
      iconColor: "success",
      iconShade: "500",
      textColor: "success",
      textShade: "900",
    },
    warning: {
      backgroundColor: "warning",
      backgroundShade: "50",
      iconColor: "warning",
      iconShade: "600",
      textColor: "warning",
      textShade: "900",
    },
    destructive: {
      backgroundColor: "destructive",
      backgroundShade: "50",
      iconColor: "destructive",
      iconShade: "600",
      textColor: "destructive",
      textShade: "700",
    },
  },
  buttons: {
    black: {
      primaryButtonStyle: "primary",
      primaryButtonVariant: "primary",
      secondaryButtonStyle: "secondary",
      secondaryButtonVariant: "primary",
    },
    white: {
      primaryButtonStyle: "primary",
      primaryButtonVariant: "primary",
      secondaryButtonStyle: "secondary",
      secondaryButtonVariant: "primary",
    },
    primary: {
      primaryButtonStyle: "primary",
      primaryButtonVariant: "primary",
      secondaryButtonStyle: "secondary",
      secondaryButtonVariant: "primary",
    },
    secondary: {
      primaryButtonStyle: "secondary",
      primaryButtonVariant: "primary",
      secondaryButtonStyle: "tertiary",
      secondaryButtonVariant: "primary",
    },
    success: {
      primaryButtonStyle: "primary",
      primaryButtonVariant: "primary",
      secondaryButtonStyle: "secondary",
      secondaryButtonVariant: "primary",
    },
    warning: {
      primaryButtonStyle: "primary",
      primaryButtonVariant: "primary",
      secondaryButtonStyle: "secondary",
      secondaryButtonVariant: "primary",
    },
    destructive: {
      primaryButtonStyle: "primary",
      primaryButtonVariant: "destructive",
      secondaryButtonStyle: "tertiary",
      secondaryButtonVariant: "destructive",
    },
    neutral: {
      primaryButtonStyle: "secondary",
      primaryButtonVariant: "primary",
      secondaryButtonStyle: "outlined",
      secondaryButtonVariant: "primary",
    },
  },
  textType: "paragraphMedium",
  iconSize: "big",
  borderRadius: "sm",
  horizontalPadding: "xxbig",
  verticalPadding: "sm",
};

const progressBar: ProgressBar = {
  bgColor: neutral[100],
  sizes: {
    small: "8px",
    medium: "16px",
    large: "24px",
    xLarge: "32px",
  },
  borderRadius: {
    small: "16px",
    medium: "32px",
    large: "48px",
    xLarge: "64px",
  },
  barColor: {
    primary: primary["500"],
    secondary: secondary["500"],
    warning: warning["500"],
    success: success["500"],
    neutral: neutral["500"],
    destructive: destructive["600"],
    destructiveAlt: destructive["300"],
  },
};

const progressRing: ProgressRing = {
  ringForegroundColor: {
    primary: primary["500"],
    secondary: secondary["500"],
    destructive: destructive["500"],
    warning: warning["500"],
    success: success["500"],
    neutral: neutral["500"],
  },
  ringBackgroundColor: {
    primary: primary["50"],
    secondary: secondary["50"],
    destructive: destructive["50"],
    warning: warning["50"],
    success: success["50"],
    neutral: neutral["50"],
  },
};

const list: List = {
  item: {
    paddingY: spacings.sm,
    paddingX: spacings.xbig,
    internalPadding: spacings.big,
    margin: spacings.xxxbig,
    shadow: shadows.small,
    background: {
      regular: "white",
      hover: neutral[50],
      active: neutral[100],
    },
    borderRadius: spacings.xxsm,
    label: {
      color: neutral[500],
      weight: 400,
    },
    description: {
      color: neutral[900],
      weight: 500,
    },
    large: {
      typography: paragraphLarge,
    },
    medium: {
      typography: paragraphMedium,
    },
    small: {
      typography: paragraphSmall,
    },
  },
};

const toggle: Toggle = {
  indicator: {
    color: "white",
    width: "22px",
    height: "22px",
    left1: "1px",
    left2: "16px",
    top: "1px",
  },
  width: "39px",
  height: "24px",
  borderRadius: "28px",
  marginRight: spacings.sm,
  default: {
    background: neutral[300],
    borderColor: neutral[300],
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "48px",
  },
  checked: {
    background: primary["500"],
    borderColor: primary["500"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "48px",
  },
};

const statusNumber: StatusNumber = {
  iconColor: {
    destructive: destructive["600"],
    warning: warning["600"],
    success: success["600"],
    neutral: neutral["600"],
  },
  labelColor: {
    destructive: destructive["600"],
    warning: warning["600"],
    success: success["600"],
    neutral: neutral["600"],
  },
};
const statusTrend: StatusTrend = {
  iconColor: {
    positive: success["600"],
    negative: destructive["600"],
    neutral: neutral["600"],
  },
  labelColor: {
    positive: success["600"],
    negative: destructive["600"],
    neutral: neutral["600"],
  },
  fontSize: "12px",
  fontWeight: 500,
};

const statusTag: StatusTag = {
  color: {
    background: {
      [STATUS_TAG_VARIANTS.DESTRUCTIVE]: destructive["400"],
      [STATUS_TAG_VARIANTS.DESTRUCTIVE_ALT]: destructive["50"],
      [STATUS_TAG_VARIANTS.SECONDARY]: neutral["900"],
      [STATUS_TAG_VARIANTS.SECONDARY_ALT]: neutral["50"],
      [STATUS_TAG_VARIANTS.NEUTRAL]: neutral["400"],
      [STATUS_TAG_VARIANTS.NEUTRAL_ALT]: neutral["200"],
      [STATUS_TAG_VARIANTS.SUCCESS]: success["500"],
      [STATUS_TAG_VARIANTS.SUCCESS_ALT]: success["25"],
      [STATUS_TAG_VARIANTS.WARNING]: warning["50"],
      [STATUS_TAG_VARIANTS.WARNING_ALT]: warning["50"],
    },
    content: {
      [STATUS_TAG_VARIANTS.DESTRUCTIVE]: "white",
      [STATUS_TAG_VARIANTS.DESTRUCTIVE_ALT]: destructive["500"],
      [STATUS_TAG_VARIANTS.SECONDARY]: "white",
      [STATUS_TAG_VARIANTS.SECONDARY_ALT]: neutral["500"],
      [STATUS_TAG_VARIANTS.NEUTRAL]: "white",
      [STATUS_TAG_VARIANTS.NEUTRAL_ALT]: neutral["500"],
      [STATUS_TAG_VARIANTS.SUCCESS]: "white",
      [STATUS_TAG_VARIANTS.SUCCESS_ALT]: success["500"],
      [STATUS_TAG_VARIANTS.WARNING]: warning["600"],
      [STATUS_TAG_VARIANTS.WARNING_ALT]: warning["900"],
    },
  },
  typography: {
    [STATUS_TAG_SIZES.LARGE]: overlineMedium,
    [STATUS_TAG_SIZES.MEDIUM]: overlineXSmall,
    [STATUS_TAG_SIZES.SMALL]: overlineXSmall,
  },
  paddingX: {
    [STATUS_TAG_SIZES.LARGE]: spacings.md,
    [STATUS_TAG_SIZES.MEDIUM]: spacings.sm,
    [STATUS_TAG_SIZES.SMALL]: spacings.xsm,
  },
  paddingY: {
    [STATUS_TAG_SIZES.LARGE]: spacings.xsm,
    [STATUS_TAG_SIZES.MEDIUM]: spacings.xxsm,
    [STATUS_TAG_SIZES.SMALL]: 0,
  },
  radius: {
    [STATUS_TAG_SIZES.LARGE]: spacings.sm,
    [STATUS_TAG_SIZES.MEDIUM]: spacings.sm,
    [STATUS_TAG_SIZES.SMALL]: spacings.xsm,
  },
};

const statusPercentage: StatusPercentage = {
  fontFamily: "Archivo",
  fontWeight: 500,
  fontSize: {
    small: "24px",
    medium: "28px",
    large: "32px",
  },
};

const card: Card = {
  fontFamily: "Archivo",
  fontWeight: 500,
  fontSize: "24px",
};

const tabView: TabView = {
  fontFamily: "Archivo",
  fontWeight: 500,
  fontSize: "16px",
};

const theme: Theme = {
  name: "light",
  breakpoints: {
    mobile: "1023px",
    desktop: "1024px",
  },
  spacings,
  colors: {
    neutral,
    primary,
    secondary,
    destructive,
    success,
    warning,
    white,
    black,
  },
  typography: {
    displayLarge,
    displaySmall,
    headingH1,
    headingH2,
    headingH3,
    headingH4,
    headingH5,
    headingH6,
    paragraphLarge,
    paragraphMedium,
    paragraphSmall,
    paragraphXSmall,
    overlineLarge,
    overlineMedium,
    overlineXSmall,
  },
  shadows,
  blurs: {
    none: "0",
    small: "8px",
    medium: "16px",
    large: "24px",
    xLarge: "40px",
  },
  gradients: {
    sunburst,
    blueMoon,
    blueberryWine,
    cherryCola,
    coldSky,
    darkWineSea,
    morningSakura,
    oliveGarden,
    synthwave,
    teaLeaves,
  },
  buttons,
  inputBox,
  select,
  checkBox,
  loader,
  alert,
  progressBar,
  progressRing,
  list,
  toggle,
  statusNumber,
  statusTag,
  statusPercentage,
  statusTrend,
  card,
  tabView,
  icons,
};

export default theme;
