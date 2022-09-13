import { mdiAlert } from "@mdi/js";
import Icon from "@mdi/react";
import uniqueId from "lodash.uniqueid";
import React, { useContext, useMemo } from "react";
import ReactSelect, {
  StylesConfig,
  Theme,
  Props,
  GroupBase,
} from "react-select";
import { ThemeContext } from "styled-components";
import {
  Helper,
  HelperDiv,
  HelperIcon,
  Label,
} from "../InputBox/BaseInputBox.styled";
import { CustomSelectProps } from "./Select.types";

const defaultStatus = "info";

function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  status,
  helper,
  label,
  ...props
}: Props<Option, IsMulti, Group> & CustomSelectProps) {
  const theme = useContext(ThemeContext);

  const customStyles: StylesConfig<Option, IsMulti, Group> = useMemo(
    () => ({
      control: (provided, state) => {
        return {
          ...provided,
          boxShadow: state.isFocused
            ? `0px 0px 0px 3px ${theme.colors.primary[100]}`
            : theme.inputBox[status || defaultStatus].boxShadow,
          border: state.isFocused
            ? theme.inputBox[status || defaultStatus].focused.border
            : theme.inputBox[status || defaultStatus].border,
          fontFamily: theme.inputBox.fontFamily,
          fontWeight: theme.inputBox.fontWeight,
          fontStyle: theme.inputBox.fontStyle,
          fontSize: theme.inputBox.fontSize,
        };
      },
      option: (provided, state) => ({
        ...provided,
        fontFamily: theme.inputBox.fontFamily,
        fontWeight: theme.inputBox.fontWeight,
        fontStyle: theme.inputBox.fontStyle,
        fontSize: theme.inputBox.fontSize,
        padding: theme.inputBox.padding,
      }),
    }),
    [status]
  );

  const selectTheme: Theme = useMemo(
    () => ({
      borderRadius: theme.inputBox.borderRadius,
      colors: {
        danger: theme.colors.error[500],
        dangerLight: theme.colors.error[300],
        neutral0: theme.colors.shades[0],
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
        controlHeight: 50,
        menuGutter: helper ? 30 : 3,
      },
    }),
    [helper]
  );

  const selectID = uniqueId("pebbles_select");

  return (
    <div>
      <Label htmlFor={selectID}>{label}</Label>
      <ReactSelect
        {...props}
        styles={customStyles}
        theme={selectTheme}
        inputId={selectID}
      />
      {helper && (
        <HelperDiv>
          {status === "error" && (
            <HelperIcon status={status}>
              <Icon
                path={mdiAlert}
                size={0.7}
                color={theme.inputBox[status || defaultStatus].helperColor}
              />
            </HelperIcon>
          )}
          <Helper status={status}>{helper}</Helper>
        </HelperDiv>
      )}
    </div>
  );
}

export default Select;
