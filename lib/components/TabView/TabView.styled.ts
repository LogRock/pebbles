import styled from "styled-components";
import { TabViewProps } from "./TabView.types";

export const TabViewWrapper = styled.div<
  Pick<TabViewProps, "bgColor" | "borderRadius">
>`
  width: 100%;

  border-radius: ${({ borderRadius }) => `${borderRadius}px`};

  background-color: ${({ bgColor }) => bgColor};
`;
