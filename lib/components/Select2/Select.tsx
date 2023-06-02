/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsChevronDown, BsExclamationTriangleFill } from "react-icons/bs";
import uniqueId from "lodash.uniqueid";
import React, { FC, useContext, useMemo } from "react";
import ReactSelect, {
  StylesConfig,
  Theme,
  Props,
  GroupBase,
  components,
  ValueContainerProps,
} from "react-select";
import styled, { ThemeContext } from "styled-components";
import { HelperDiv, HelperIcon } from "../InputBox/BaseInputBox.styled";
import { CustomSelectProps } from "./Select.types";
import ThemeType from "../../types/theme";
import { DropdownIndicatorWrapper } from "./Select.styled";
import { spacingTokens } from "../../types/tokens";
import { Text } from "../Typography";
import { RequiredAsterisk } from "../InputBox/BaseInputBox";

const { ValueContainer } = components;

export const StyledDiv = styled.div<{ spaceAfter?: spacingTokens }>`
  margin-bottom: ${({ theme, spaceAfter }) =>
    spaceAfter ? theme.spacings?.[spaceAfter as spacingTokens] : 0};

  label {
    display: block;
  }
`;

export const CustomValueContainer: FC<ValueContainerProps> = ({
  children,
  ...props
}) => {
  const { getValue } = props;
  let selectedValues = 0;

  if (Array.isArray(getValue())) {
    selectedValues = getValue().length;
  }

  if (selectedValues > 1) {
    return (
      <ValueContainer {...props}>
        {`${selectedValues} items selected.`}
        {children?.[1 as keyof unknown]}
      </ValueContainer>
    );
  }
  return <ValueContainer {...props}>{children}</ValueContainer>;
};

function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  required,
  helper,
  helperIcon,
  label,
  destructive,
  spaceAfter,
  ...props
}: Props<Option, IsMulti, Group> & CustomSelectProps) {
  const theme = useContext<ThemeType>(ThemeContext);

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
      borderRadius: theme.inputBox.borderRadius as number,
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
      <ReactSelect
        {...props}
        required={required}
        styles={customStyles}
        theme={selectTheme}
        inputId={selectID}
        components={{
          ...props.components,
          ValueContainer: CustomValueContainer as any,
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

export default Select;
