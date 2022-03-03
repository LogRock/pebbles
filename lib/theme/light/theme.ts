import Theme, { Buttons, ButtonVariant } from "../../types/theme";
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
    borderColor: neutral["200"],
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
  shadows: {
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
  },
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
};

export default theme;
