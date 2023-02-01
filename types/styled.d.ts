// import original module declarations
import "styled-components";
import Theme from "../lib/types/theme";

// and extend them!
declare module "styled-components" {
  // eslint-disable-next-line import/no-unused-modules, @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
