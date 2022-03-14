import React, { FC } from "react";
import styled from "styled-components";
import { paragraphMediumCSS } from "../../Typography/Typography.styled";

export const THead = styled.thead<{ highlighted?: boolean }>`
  ${paragraphMediumCSS}
  display: flex;
  box-sizing: border-box;
  padding: 18px 10px;

  border: none;

  background: ${({ theme, highlighted }) =>
    highlighted ? theme.select.items.hover.background : "none"};

  text-align: left;
`;

const TR = styled.th`
  display: flex;
  width: 100%;

  font-weight: bold;
`;

const IDTD = styled.td`
  flex-basis: ${({ theme }) => theme.spacings.huge};
  flex-grow: 0;
  padding-right: ${({ theme }) => theme.spacings.md};
`;

const NameTD = styled.td`
  flex-grow: 1;
`;

const TableHeader: FC<{ id: string; name: string }> = (props) => {
  return (
    <THead {...props}>
      <TR>
        <IDTD>{props.id}</IDTD>
        <NameTD>{props.name}</NameTD>
      </TR>
    </THead>
  );
};

export default TableHeader;
