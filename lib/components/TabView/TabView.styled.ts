import styled from "styled-components";

export const TabViewWrapper = styled.div<{ variant: string }>`
  color: ${(props: any) => props.theme.colors[props.variant || "primary"][500]};
`;
