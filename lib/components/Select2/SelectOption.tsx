import React from "react";
import { OptionProps } from "react-select";
import { Text } from "../Typography";
import Box from "../Box/Box";
import styled from "styled-components";

const StyledBox = styled(Box)`
  margin-top: ${({ theme }) => theme.spacings?.xsm};
  margin-bottom: ${({ theme }) => theme.spacings?.xsm};
  padding-left: ${({ theme }) => theme.spacings?.md};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme, backgroundShade }) =>
      backgroundShade || theme.colors.primary[100]};
  }
`;

export function SelectOption(props: OptionProps<unknown>) {
  const {
    data,
    innerProps,
    isSelected,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    selectProps: { filter, setMenuIsOpen, getOptionLabel, getOptionValue },
  } = props;

  if (filter) {
    if (
      !getOptionLabel(data).toLowerCase().includes(filter.toLowerCase()) &&
      !getOptionValue(data).toLowerCase().includes(filter.toLowerCase())
    ) {
      return null;
    }
  }

  return (
    <div
      {...innerProps}
      onClick={(e) => {
        innerProps?.onClick?.(e);
        setMenuIsOpen(false);
      }}
    >
      <StyledBox
        backgroundColor={isSelected ? "primary" : "white"}
        backgroundShade={isSelected ? "200" : undefined}
        padding="xxsm"
        align="start"
      >
        <Text>{getOptionLabel(data)}</Text>
      </StyledBox>
    </div>
  );
}
