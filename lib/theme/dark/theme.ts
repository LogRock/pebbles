import Theme from "../../types/theme";
import lightTheme from "../light";

// There is no dark theme right now
// and if/when we add one, it will only customize some aspects of the default theme
const theme: Theme = {
  ...lightTheme,
  name: "dark",
};

export default theme;
