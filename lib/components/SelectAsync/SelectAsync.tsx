import { BsChevronDown, BsExclamationTriangleFill } from "react-icons/bs";
import uniqueId from "lodash.uniqueid";
import React, { useContext, useMemo } from "react";
import { StylesConfig, Theme, GroupBase } from "react-select";
import ReactSelectAsync, { AsyncProps } from "react-select/async";
import styled, { ThemeContext } from "styled-components";
import { HelperDiv, HelperIcon } from "../InputBox/BaseInputBox.styled";
import { CustomSelectProps } from "./SelectAsync.types";
import { spacingTokens } from "../../types/tokens";
import { Text } from "../Typography";
import { CustomValueContainer } from "../Select2/Select";
import { DropdownIndicatorWrapper } from "../Select2/Select.styled";
import { RequiredAsterisk } from "../InputBox/BaseInputBox";

export const StyledDiv = styled.div<{ spaceAfter?: spacingTokens }>`
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  label {
    display: block;
  }
`;

function SelectAsync<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  required,
  destructive,
  helper,
  helperIcon,
  spaceAfter,
  label,
  ...props
}: AsyncProps<Option, IsMulti, Group> & CustomSelectProps) {
  const theme = useContext(ThemeContext);

  const customStyles: StylesConfig<Option, IsMulti, Group> = useMemo(
    () => ({
      control: (provided, state) => {
        return {
          ...provided,
          outline: state.isFocused
            ? destructive
              ? `0px 0px 0px 3px ${theme.colors.destructive[100]}`
              : `0px 0px 0px 3px ${theme.colors.primary[100]}`
            : "none",
          boxShadow: state.isFocused
            ? destructive
              ? `0px 0px 0px 3px ${theme.colors.destructive[100]}`
              : `0px 0px 0px 3px ${theme.colors.primary[100]}`
            : theme.inputBox[destructive ? "destructive" : "info"].boxShadow,
          border: state.isFocused
            ? theme.inputBox[destructive ? "destructive" : "info"].focused
                .border
            : theme.inputBox[destructive ? "destructive" : "info"].border,
          fontFamily: theme.typography.paragraphMedium.fontFamily,
          fontWeight: theme.typography.paragraphMedium.desktop.weights.normal,
          fontSize: theme.typography.paragraphMedium.desktop.fontSize,
        };
      },
      indicatorSeparator: (provided) => ({
        ...provided,
        margin: 0,
        backgroundColor: destructive
          ? theme.colors.destructive[400]
          : theme.colors.neutral[200],
      }),
      option: (provided) => ({
        ...provided,
        fontFamily: theme.typography.paragraphMedium.fontFamily,
        fontWeight: theme.typography.paragraphMedium.desktop.weights.normal,
        fontSize: theme.typography.paragraphMedium.desktop.fontSize,
        padding: theme.inputBox.padding,
      }),
      menu: (provided) => ({
        ...provided,
        borderRadius: 0,
      }),
      placeholder: (provided) => ({
        ...provided,
        color: theme.colors.neutral[400],
      }),
    }),
    [status]
  );

  const selectTheme: Theme = useMemo(
    () => ({
      borderRadius: 8,
      colors: {
        danger: theme.colors.destructive[500],
        dangerLight: theme.colors.destructive[300],
        neutral0: "white",
        neutral5: theme.colors.neutral[50],
        neutral10: theme.colors.neutral[100],
        neutral20: theme.colors.neutral[200],
        neutral30: theme.colors.neutral[300],
        neutral40: theme.colors.neutral[400],
        neutral50: theme.colors.neutral[500],
        neutral60: theme.colors.neutral[600],
        neutral70: theme.colors.neutral[700],
        neutral80: theme.colors.neutral[800],
        neutral90: theme.colors.neutral[900],
        primary: theme.colors.primary[500],
        primary25: theme.colors.primary[50],
        primary50: theme.colors.primary[500],
        primary75: theme.colors.primary[700],
      },
      spacing: {
        baseUnit: 4,
        controlHeight: 40,
        menuGutter: helper ? 24 : 3,
      },
    }),
    [helper]
  );

  const selectID = uniqueId("pebbles_select");

  return (
    <StyledDiv spaceAfter={spaceAfter}>
      <Text
        as="label"
        htmlFor={selectID}
        spaceAfter="xsm"
        type="overlineXSmall"
      >
        {label} {required && <RequiredAsterisk />}
      </Text>
      <ReactSelectAsync
        {...props}
        styles={customStyles}
        required={required}
        theme={selectTheme}
        inputId={selectID}
        components={{
          ValueContainer: CustomValueContainer as never,
          DropdownIndicator: () => (
            <DropdownIndicatorWrapper>
              <BsChevronDown size={16} />
            </DropdownIndicatorWrapper>
          ),
        }}
      />
      {helper && (
        <HelperDiv>
          {destructive && !helperIcon && (
            <HelperIcon destructive={destructive}>
              <BsExclamationTriangleFill />
            </HelperIcon>
          )}
          {helperIcon && (
            <HelperIcon destructive={destructive}>{helperIcon}</HelperIcon>
          )}
          <Text
            type="paragraphSmall"
            color={destructive ? "destructive" : "neutral"}
            shade="400"
          >
            {helper}
          </Text>
        </HelperDiv>
      )}
    </StyledDiv>
  );
}

export default SelectAsync;
