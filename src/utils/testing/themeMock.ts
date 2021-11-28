import { Theme } from "../../types/theme";

const mockTheme: Theme = {
  breakpoints: {
    mobile: "600px",
    tablet: "700px",
    desktop: "1000px",
    widescreen: "1200px",
    fullhd: "1800px",
  },
  colors: {
    primary: {
      lightest: "#ffcc33",
      lighter: "#ffbb22",
      light: "#ffaa11",
      medium: "#ff9900",
      dark: "#ff8800",
      darker: "#ff7700",
      darkest: "#ff6600",
    },
    secondary: {
      lightest: "#9a3ddd",
      lighter: "#8a2dcd",
      light: "#7a1dbd",
      medium: "#6a0dad",
      dark: "#5a009d",
      darker: "#4a008d",
      darkest: "#3a007d",
    },
    status: {
      success: {
        lightest: "#99ff99",
        lighter: "#88ee88",
        light: "#77dd77",
        medium: "#66cc66",
        dark: "#55bb55",
        darker: "#44aa44",
        darkest: "#339933",
      },
      info: {
        lightest: "#3399ff",
        lighter: "#3388ee",
        light: "#3377dd",
        medium: "#3366cc",
        dark: "#3355bb",
        darker: "#3344aa",
        darkest: "#333399",
      },
      warning: {
        lightest: "#ffff99",
        lighter: "#eeee88",
        light: "#dddd77",
        medium: "#cccc66",
        dark: "#bbbb55",
        darker: "#aaaa44",
        darkest: "#999933",
      },
      danger: {
        lightest: "#ff9999",
        lighter: "#ee8888",
        light: "#dd7777",
        medium: "#cc6666",
        dark: "#bb5555",
        darker: "#aa4444",
        darkest: "#993333",
      },
      neutral: {
        lightest: "#999999",
        lighter: "#888888",
        light: "#777777",
        medium: "#666666",
        dark: "#555555",
        darker: "#444444",
        darkest: "#333333",
      },
    },
    text: {
      primary: {
        lightest: "#999999",
        lighter: "#888888",
        light: "#777777",
        medium: "#666666",
        dark: "#555555",
        darker: "#444444",
        darkest: "#333333",
      },
      secondary: {
        lightest: "#cccccc",
        lighter: "#bbbbbb",
        light: "#aaaaaa",
        medium: "#999999",
        dark: "#888888",
        darker: "#777777",
        darkest: "#666666",
      },
      inverted: {
        lightest: "#333333",
        lighter: "#444444",
        light: "#555555",
        medium: "#666666",
        dark: "#777777",
        darker: "#888888",
        darkest: "#999999",
      },
    },
  },
  spacings: {
    xxxs: "2px",
    xxs: "4px",
    xs: "8px",
    sm: "16px",
    md: "32px",
    lg: "64px",
    xl: "128px",
    xxl: "256px",
    xxxl: "512px",
  },
  navbar: {
    background: "#00ff55",
    navigation: {
      item: {
        regular: {
          color: "#000000",
          background: "#000000",
          border: "#000000",
        },
        active: {
          color: "#999999",
          background: "#999999",
          border: "#999999",
        },
        hover: {
          color: "#ffffff",
          background: "#ffffff",
          border: "#ffffff",
        },
      },
    },
  },
  typography: {
    header1: {
      regular: {
        color: "#000000",
        fontSize: "20px",
        fontWeight: 900,
        textDecoration: "none",
      },
      inverted: {
        color: "#ffffff",
        fontSize: "20px",
        fontWeight: 900,
        textDecoration: "none",
      },
    },
    header2: {
      regular: {
        color: "#111111",
        fontSize: "19px",
        fontWeight: 800,
        textDecoration: "none",
      },
      inverted: {
        color: "#eeeeee",
        fontSize: "19px",
        fontWeight: 800,
        textDecoration: "none",
      },
    },
    header3: {
      regular: {
        color: "#222222",
        fontSize: "18px",
        fontWeight: 700,
        textDecoration: "none",
      },
      inverted: {
        color: "#dddddd",
        fontSize: "18px",
        fontWeight: 700,
        textDecoration: "none",
      },
    },
    header4: {
      regular: {
        color: "#333333",
        fontSize: "17px",
        fontWeight: 600,
        textDecoration: "none",
      },
      inverted: {
        color: "#cccccc",
        fontSize: "17px",
        fontWeight: 600,
        textDecoration: "none",
      },
    },
    header5: {
      regular: {
        color: "#444444",
        fontSize: "16px",
        fontWeight: 500,
        textDecoration: "none",
      },
      inverted: {
        color: "#bbbbbb",
        fontSize: "16px",
        fontWeight: 500,
        textDecoration: "none",
      },
    },
    header6: {
      regular: {
        color: "#555555",
        fontSize: "15px",
        fontWeight: 400,
        textDecoration: "none",
      },
      inverted: {
        color: "#aaaaaa",
        fontSize: "15px",
        fontWeight: 400,
        textDecoration: "none",
      },
    },
    paragraph: {
      regular: {
        color: "#666666",
        fontSize: "14px",
        fontWeight: 300,
        textDecoration: "none",
      },
      inverted: {
        color: "#999999",
        fontSize: "14px",
        fontWeight: 300,
        textDecoration: "none",
      },
    },
    link: {
      regular: {
        color: "#0000ff",
        fontSize: "13px",
        fontWeight: 200,
        textDecoration: "underline",
      },
      inverted: {
        color: "#00aaff",
        fontSize: "13px",
        fontWeight: 200,
        textDecoration: "underline",
      },
    },
  },
};

export default mockTheme;
