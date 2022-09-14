import React, { FC, RefObject } from "react";
import { OptionProps } from "react-select";
import styled from "styled-components";
import CheckBox from "../../CheckBox";
import { paragraphMediumCSS } from "../../Typography/Typography.styled";

export const CheckBoxOptionWrapper = styled.div`
  ${paragraphMediumCSS}
  box-sizing: border-box;
  padding: 18px 10px;

  border: none;

  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.select.items.hover.background};
  }
`;

const CheckBoxOption: FC<OptionProps> = ({
  innerProps: { ref, ...innerProps },
  isSelected,
  label,
}) => {
  return (
    <CheckBoxOptionWrapper
      {...innerProps}
      ref={ref as RefObject<HTMLDivElement>}
    >
      <CheckBox checked={isSelected}>{label}</CheckBox>
    </CheckBoxOptionWrapper>
  );
};

export default CheckBoxOption;
