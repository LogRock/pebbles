import React, { FC } from "react";
import styled from "styled-components";
import CheckBox from "../../CheckBox";
import { paragraphMediumCSS } from "../../Typography/Typography.styled";

/**
 * @deprecated in favor of Select2
 */
export const CheckBoxItemWrapper = styled.div<{ highlighted?: boolean }>`
  ${paragraphMediumCSS}
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

/**
 * @deprecated in favor of Select2
 */
const CheckBoxItem: FC<{
  item?: {
    id: number;
    name: string;
    label?: string;
    toString?: () => string;
  };
  onClick: () => void;
  selected?: boolean;
}> = (props) => {
  return (
    <CheckBoxItemWrapper>
      <CheckBox
        checked={props.selected}
        onClick={props.onClick}
        onChange={() => null}
      >
        {props?.item?.name || props?.item?.label || props?.item?.toString?.()}
      </CheckBox>
    </CheckBoxItemWrapper>
  );
};

export default CheckBoxItem;
