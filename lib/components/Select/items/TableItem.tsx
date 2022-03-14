import React, { FC } from "react";
import styled from "styled-components";
import { paragraphMediumCSS } from "../../Typography/Typography.styled";

export const DefaultItem = styled.button<{ highlighted?: boolean }>`
  ${paragraphMediumCSS}
  display: flex;
  box-sizing: border-box;
  padding: 18px 10px;

  border: none;

  background: ${({ theme, highlighted }) =>
    highlighted ? theme.select.items.hover.background : "none"};

  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.select.items.hover.background};
  }
`;

const TR = styled.tr`
  display: flex;
  width: 100%;
`;

const IDTD = styled.td`
  flex-basis: ${({ theme }) => theme.spacings.huge};
  flex-grow: 0;
  padding-right: ${({ theme }) => theme.spacings.md};
`;

const NameTD = styled.td`
  flex-grow: 1;
`;

const TableItem: FC<{
  item: {
    id?: string | number;
    name?: string;
    label?: string;
    toString?: () => string;
  };
}> = (props) => {
  return (
    <DefaultItem {...props}>
      <TR>
        <IDTD>{props?.item?.id}</IDTD>
        <NameTD>
          {props?.item?.name || props?.item?.label || props?.item?.toString?.()}
        </NameTD>
      </TR>
    </DefaultItem>
  );
};

export default TableItem;
