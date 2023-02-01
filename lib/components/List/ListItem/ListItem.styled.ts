import styled, { css } from "styled-components";
import { ListItemProps } from "./ListItem.types";

const typographyCSS = css<Pick<ListItemProps, "size">>`
  font-family: ${({ theme, size }) =>
    theme.list.item[size || "medium"].typography.fontFamily};
  font-size: ${({ theme, size }) =>
    theme.list.item[size || "medium"].typography.desktop.fontSize};
  line-height: ${({ theme, size }) =>
    theme.list.item[size || "medium"].typography.desktop.lineHeight};
`;

export const ListItemWrapper = styled.li<Pick<ListItemProps, "size">>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.list.item.margin};
  padding-top: ${({ theme }) => theme.list.item.paddingY};
  padding-right: ${({ theme }) => theme.list.item.paddingX};
  padding-bottom: ${({ theme }) => theme.list.item.paddingY};
  padding-left: ${({ theme }) => theme.list.item.paddingX};

  border-radius: ${({ theme }) => theme.list.item.borderRadius};

  background-color: ${({ theme }) => theme.list.item.background.regular};
  box-shadow: ${({ theme }) => theme.list.item.shadow};

  ${typographyCSS}

  &:active {
    background-color: ${({ theme }) => theme.list.item.background.active};
  }

  &:hover {
    background-color: ${({ theme }) => theme.list.item.background.hover};
  }
`;

export const ListItemContentStart = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.list.item.internalPadding};
`;

export const ListItemContentEnd = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.list.item.internalPadding};
`;

export const ListItemMainContent = styled.div<Pick<ListItemProps, "alignment">>`
  margin-right: ${({ alignment }) =>
    alignment !== "end" ? "auto" : undefined};
  margin-left: ${({ alignment }) => (alignment === "end" ? "auto" : undefined)};

  text-align: ${({ alignment }) => alignment};
`;

export const ListItemLabel = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  font-weight: ${({ theme }) => theme.list.item.label.weight};
`;

export const ListItemDescription = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  font-weight: ${({ theme }) => theme.list.item.description.weight};
`;
