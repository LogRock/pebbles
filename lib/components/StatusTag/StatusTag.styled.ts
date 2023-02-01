import styled, { css } from "styled-components";

import { StatusTagProps } from "./StatusTag.types";

export const StatusTagContainer = styled.div<StatusTagProps>`
  ${({ theme, size, variant }) => css`
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.statusTag.paddingY[size]} ${theme.statusTag.paddingX[size]};

    border-radius: ${theme.statusTag.radius[size]};

    background: ${theme.statusTag.color.background[variant]};

    color: ${theme.statusTag.color.content[variant]};
    font-family: ${theme.statusTag.typography[size].fontFamily};
    font-size: ${theme.statusTag.typography[size].desktop.fontSize};
    font-weight: ${theme.statusTag.typography[size].desktop.weights.bold};
    line-height: ${theme.statusTag.typography[size].desktop.lineHeight};
    text-transform: ${theme.statusTag.typography[size].textTransform};
  `}
`;
