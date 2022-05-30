import Theme, {
  Buttons,
  ButtonVariant,
  CheckBox,
  InputBox,
  Select,
  Loader,
  Alert,
  ProgressBar,
  List,
  Toggle,
  StatusNumber,
  StatusTag,
  StatusPercentage,
  StatusTrend,
} from "../../types/theme";
import {
  neutral,
  error,
  primary,
  secondary,
  shades,
  success,
  warning,
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
  overlineSmall,
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

const spacings = {
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

const primaryVariant: ButtonVariant = {
  primary: {
    background: primary["500"],
    borderColor: primary["500"],
    borderWidth: 0,
    contentColor: shades["100"],
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
    background: "transparent",
    borderColor: neutral["300"],
    borderWidth: "1px",
    contentColor: neutral["700"],
  },
};

const destructiveVariant: ButtonVariant = {
  primary: {
    background: error["500"],
    borderColor: error["500"],
    borderWidth: 0,
    contentColor: shades["0"],
    boxShadow: shadows.small,
    filter: "drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1))",
  },
  secondary: {
    background: error["50"],
    borderColor: error["50"],
    borderWidth: 0,
    contentColor: error["600"],
    boxShadow: shadows.small,
    filter: "drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1))",
  },
  tertiary: {
    background: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
    contentColor: error["600"],
    textDecorationLine: "none",
  },
  outlined: {
    background: "transparent",
    borderColor: error["300"],
    borderWidth: "1px",
    contentColor: error["500"],
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
    background: "transparent",
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
    contentColor: shades["100"],
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
    background: "transparent",
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
      size: "14px",
      horizontalPadding: "11px",
      verticalPadding: "10px",
    },
    small: {
      borderRadius: "6px",
      size: "14px",
      horizontalPadding: "13px",
      verticalPadding: "14px",
    },
    medium: {
      borderRadius: "6px",
      size: spacings.md,
      horizontalPadding: "14px",
      verticalPadding: spacings.md,
    },
    large: {
      borderRadius: "6px",
      size: spacings.md,
      horizontalPadding: spacings.md,
      verticalPadding: "22px",
    },
    primary: primaryVariant,
    destructive: destructiveVariant,
    disabled: disabledVariant,
  },
};

const inputBox: InputBox = {
  spacing: spacings.xxbig,
  fontFamily: "Archivo",
  fontWeight: "normal",
  fontStyle: "normal",
  fontSize: spacings.md,
  lineHeight: spacings.xbig,
  fontFeatureSettings: "'salt' on",
  padding: `10px ${spacings.sm}`,
  boxSizing: "border-box",
  boxShadow: shadows.xSmall,
  borderRadius: "8px",
  border: "1px solid #D1D5DB",
  margin: `${spacings.xsm} 0px`,
  background: "white",
  height: "50px",
  width: "100%",

  error: {
    color: error[900],
    border: `1px solid ${error[300]}`,
    boxShadow: shadows.xSmall,
    hintColor: neutral[500],
    focused: {
      boxSizing: "border-box",
      boxShadow: `0px 0px 0px ${spacings.xxsm} ${error["100"]}`,
      borderRadius: "2px",
      border: `1px solid ${error["300"]}`,
    },
  },
  info: {
    color: neutral[900],
    border: "1px solid #D1D5DB",
    boxShadow: shadows.xSmall,
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
    color: neutral[500],
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
    color: shades[0],
    width: "3px",
    height: "6px",
    left: "5px",
    top: "2px",
  },
  width: spacings.md,
  height: spacings.md,
  marginRight: spacings.sm,
  default: {
    background: shades[0],
    borderColor: neutral[300],
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "1.33333px",
  },
  checked: {
    background: primary["500"],
    borderColor: primary["500"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "1.33333px",
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
  neutral: {
    background: neutral[50],
    borderColor: neutral[200],
    titleColor: neutral[800],
    descriptionColor: neutral[700],
    iconColor: neutral[500],
  },
  primary: {
    background: primary[50],
    borderColor: primary[600],
    titleColor: primary[900],
    descriptionColor: neutral[700],
    iconColor: primary[600],
  },
  success: {
    background: success[50],
    borderColor: success[200],
    titleColor: success[800],
    descriptionColor: success[700],
    iconColor: success[500],
  },
  warning: {
    background: warning[50],
    borderColor: warning[200],
    titleColor: warning[800],
    descriptionColor: warning[700],
    iconColor: warning[500],
  },
  error: {
    background: error[50],
    borderColor: error[200],
    titleColor: error[800],
    descriptionColor: error[700],
    iconColor: error[500],
  },
  title: {
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "24px",
    height: "24px",
  },
  description: {
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "20px",
    height: "20px",
  },

  fontFamily: "Archivo",
  borderRadius: spacings.sm,
};

const progressBar: ProgressBar = {
  barColor: primary[500],
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
};

const list: List = {
  item: {
    paddingY: spacings.sm,
    paddingX: spacings.xbig,
    internalPadding: spacings.big,
    margin: spacings.xxxbig,
    shadow: shadows.small,
    background: {
      regular: shades[0],
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
    color: shades[0],
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
    error: error["600"],
    warning: warning["600"],
    success: success["600"],
    neutral: neutral["600"],
  },
  labelColor: {
    error: error["600"],
    warning: warning["600"],
    success: success["600"],
    neutral: neutral["600"],
  },
};
const statusTrend: StatusTrend = {
  iconColor: {
    positive: success["600"],
    negative: error["600"],
    neutral: neutral["600"],
  },
  labelColor: {
    positive: success["600"],
    negative: error["600"],
    neutral: neutral["600"],
  },
};

const statusTag: StatusTag = {
  backgroundColor: {
    error: error["50"],
    warning: warning["50"],
    success: success["50"],
    neutral: neutral["50"],
  },
  borderColor: {
    error: error["200"],
    warning: warning["200"],
    success: success["200"],
    neutral: neutral["200"],
  },
  iconColor: {
    error: error["600"],
    warning: warning["600"],
    success: success["600"],
    neutral: neutral["600"],
  },
  labelColor: {
    error: error["600"],
    warning: warning["600"],
    success: success["600"],
    neutral: neutral["600"],
  },
  tagSize: {
    small: "28px",
    medium: "36px",
    large: "44px",
  },
  labelSize: {
    small: "11px",
    medium: "12px",
    large: "14px",
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
    error,
    success,
    warning,
    shades,
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
    overlineSmall,
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
  list,
  toggle,
  statusNumber,
  statusTag,
  statusPercentage,
  statusTrend,
};

export default theme;
