import React, { FC } from "react";
import styled from "styled-components";
import { paragraphMediumCSS } from "../../Typography/Typography.styled";

export const DefaultItem = styled.button`
  padding: 18px 10px;
  ${paragraphMediumCSS}
  border: none;

  background: none;

  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.select.items.hover.background};
  }
`;

const SimpleItem: FC<{
  item: {
    name?: string;
    label?: string;
    toString?: () => string;
  };
}> = (props) => {
  return (
    <DefaultItem {...props}>
      {props?.item?.name || props?.item?.label || props?.item?.toString?.()}
    </DefaultItem>
  );
};

export default SimpleItem;
