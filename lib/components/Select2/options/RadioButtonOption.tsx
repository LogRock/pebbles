import React, { FC, RefObject } from "react";
import { OptionProps } from "react-select";
import styled from "styled-components";
import RadioButton from "../../RadioButton";
import { paragraphMediumCSS } from "../../Typography/Typography.styled";

export const RadioButtonOptionWrapper = styled.div`
  ${paragraphMediumCSS}
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacings.xxsm};
  padding-left: ${({ theme }) => theme.spacings.sm};

  border: none;

  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.select.items.hover.background};
  }
`;

const RadioButtonOption: FC<OptionProps> = ({
  innerProps: { ref, ...innerProps },
  isSelected,
  label,
}) => {
  return (
    <RadioButtonOptionWrapper
      {...innerProps}
      ref={ref as RefObject<HTMLDivElement>}
    >
      <RadioButton checked={isSelected}>{label}</RadioButton>
    </RadioButtonOptionWrapper>
  );
};

export default RadioButtonOption;
