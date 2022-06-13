import styled from "styled-components";

import { OverlineLarge } from "../Typography";
import { StatusTagProps } from "./StatusTag.types";

export const StatusTagContainer = styled.div<Pick<StatusTagProps, "size">>`
  height: ${({ theme, size }) => theme.statusTag.size.tag[size]};
  margin: "0px";
`;

export const StatusTagBackground = styled.div<
  Pick<StatusTagProps, "variant" | "size" | "collapsed">
>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme, size, collapsed }) => {
    return collapsed ? theme.statusTag.size.tag.micro : "max-content";
  }};
  height: ${({ theme, size, collapsed }) => {
    return collapsed
      ? theme.statusTag.size.tag.micro
      : theme.statusTag.size.tag[size];
  }};
  padding: 0
    ${({ theme, collapsed }) => {
      return collapsed ? 0 : theme.spacings.md;
    }};

  border: 0px;
  border-radius: 12px;

  background-color: ${({ theme, variant, collapsed }) => {
    return collapsed
      ? theme.statusTag.color.background.collapsed[variant]
      : theme.statusTag.color.background[variant];
  }};
`;

export const IconWrapper = styled.div<Pick<any, "variant" | "hasLabel">>`
  margin-right: ${({ theme, hasLabel }) => (hasLabel ? theme.spacings.sm : 0)};
  margin-bottom: -2px;

  color: ${({ theme, variant }) => theme.statusTag.color.icon[variant]};
`;

export const StyledOverlineLarge = styled(OverlineLarge)<
  Pick<StatusTagProps, "variant" | "size" | "collapsed">
>`
  color: ${({ theme, variant, collapsed }) => {
    return collapsed
      ? theme.statusTag.color.label.collapsed[variant]
      : theme.statusTag.color.label[variant];
  }};
  font-size: ${({ theme, size, collapsed }) => {
    return collapsed
      ? theme.statusTag.size.label.micro
      : theme.statusTag.size.label[size];
  }};
`;
