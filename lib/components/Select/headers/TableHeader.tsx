import React, { FC } from "react";
import styled from "styled-components";
import { paragraphMediumCSS } from "../../Typography/Typography.styled";

/**
 * @deprecated in favor of Select2
 */
export const THead = styled.div<{ highlighted?: boolean }>`
  ${paragraphMediumCSS}
  display: flex;
  box-sizing: border-box;
  padding: 18px 10px;

  border: none;

  background: ${({ theme, highlighted }) =>
    highlighted ? theme.select.items.hover.background : "none"};

  text-align: left;
`;

const TR = styled.div`
  display: flex;
  width: 100%;

  font-weight: bold;
`;

const IDTH = styled.div`
  flex-basis: ${({ theme }) => theme.spacings.xhuge};
  flex-grow: 0;
  padding-right: ${({ theme }) => theme.spacings.md};
`;

const NameTH = styled.div`
  flex-grow: 1;
`;

const TableHeader: FC<{ id: string; name: string }> = (props) => {
  return (
    <THead {...props}>
      <TR>
        <IDTH>{props.id}</IDTH>
        <NameTH>{props.name}</NameTH>
      </TR>
    </THead>
  );
};

export default TableHeader;
