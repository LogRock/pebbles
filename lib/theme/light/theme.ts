import Theme, {
  Buttons,
  ButtonVariant,
  CheckBox,
  InputBox,
  Select,
  Loader,
  Alert,
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

const primaryVariant: ButtonVariant = {
  primary: {
    background: primary["500"],
    borderColor: primary["500"],
    borderWidth: 0,
    contentColor: shades["100"],
  },
  secondary: {
    background: primary["200"],
    borderColor: primary["200"],
    borderWidth: 0,
    contentColor: shades["100"],
  },
  tertiary: {
    background: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
    contentColor: primary["800"],
  },
  outlined: {
    background: "transparent",
    borderColor: primary["500"],
    borderWidth: "1px",
    contentColor: primary["500"],
  },
};

const destructiveVariant: ButtonVariant = {
  primary: {
    background: error["500"],
    borderColor: error["500"],
    borderWidth: 0,
    contentColor: shades["0"],
  },
  secondary: {
    background: error["50"],
    borderColor: error["50"],
    borderWidth: 0,
    contentColor: error["600"],
  },
  tertiary: {
    background: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
    contentColor: error["600"],
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
  },
  secondary: {
    background: neutral["200"],
    borderColor: neutral["200"],
    borderWidth: 0,
    contentColor: neutral["400"],
  },
  tertiary: {
    background: "transparent",
    borderColor: "transparent",
    borderWidth: 0,
    contentColor: neutral["300"],
  },
  outlined: {
    background: "transparent",
    borderColor: neutral["400"],
    borderWidth: "1px",
    contentColor: neutral["300"],
  },
};

const buttons: Buttons = {
  fontFamily: "Archivo, sans-serif",
  fontWeight: 500,
  outline: `3px solid ${primary[200]}`,
  regular: {
    xSmall: {
      borderRadius: "2px",
      fontSize: "14px",
      iconPadding: spacings.xxsm,
      horizontalPadding: "10px",
      verticalPadding: "6px",
    },
    small: {
      borderRadius: "2px",
      fontSize: "14px",
      iconPadding: spacings.xxsm,
      horizontalPadding: spacings.md,
      verticalPadding: spacings.xsm,
    },
    medium: {
      borderRadius: "2px",
      fontSize: "16px",
      iconPadding: spacings.xxsm,
      horizontalPadding: spacings.big,
      verticalPadding: spacings.xsm,
    },
    large: {
      borderRadius: "2px",
      fontSize: "18px",
      iconPadding: spacings.xxsm,
      horizontalPadding: spacings.xbig,
      verticalPadding: "14px",
    },
    primary: primaryVariant,
    destructive: destructiveVariant,
    disabled: disabledVariant,
  },
  icon: {
    xSmall: {
      borderRadius: "2px",
      size: "14px",
      horizontalPadding: "11px",
      verticalPadding: "10px",
    },
    small: {
      borderRadius: "2px",
      size: "14px",
      horizontalPadding: "13px",
      verticalPadding: "14px",
    },
    medium: {
      borderRadius: "2px",
      size: spacings.md,
      horizontalPadding: "14px",
      verticalPadding: spacings.md,
    },
    large: {
      borderRadius: "2px",
      size: spacings.md,
      horizontalPadding: spacings.md,
      verticalPadding: "22px",
    },
    primary: primaryVariant,
    destructive: destructiveVariant,
    disabled: disabledVariant,
  },
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
  borderRadius: "2px",
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
    helperColor: error["600"],
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
    helperColor: neutral[500],
    focused: {
      boxSizing: "border-box",
      boxShadow: `0px 0px 0px 4px ${primary["100"]}`,
      borderRadius: "2px",
      border: `1px solid ${primary["300"]}`,
    },
  },

  label: {
    color: "black",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 500,
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
    borderRadius: "2px",
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
    descriptionColor: primary[700],
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
    fontSize: "16px",
    lineHeight: "24px",
    height: "24px",
  },
  description: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    height: "20px",
  },
  hint: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    height: "20px",
  },
  fontFamily: "Archivo",
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
};

export default theme;
