import { mdiAlert } from "@mdi/js";
import Icon from "@mdi/react";
import uniqueId from "lodash.uniqueid";
import React, { useContext, useMemo } from "react";
import { StylesConfig, Theme, GroupBase } from "react-select";
import ReactSelectAsync, { AsyncProps } from "react-select/async";
import { ThemeContext } from "styled-components";
import {
  Helper,
  HelperDiv,
  HelperIcon,
  Label,
} from "../InputBox/BaseInputBox.styled";
import { CustomSelectProps } from "./SelectAsync.types";

const defaultStatus = "info";

function SelectAsync<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  status,
  helper,
  label,
  ...props
}: AsyncProps<Option, IsMulti, Group> & CustomSelectProps) {
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
      option: (provided) => ({
        ...provided,
        fontFamily: theme.inputBox.fontFamily,
        fontWeight: theme.inputBox.fontWeight,
        fontStyle: theme.inputBox.fontStyle,
        fontSize: theme.inputBox.fontSize,
        padding: theme.inputBox.padding,
      }),
      menu: (provided) => ({
        ...provided,
        borderRadius: 0,
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
        menuGutter: helper ? 24 : 3,
      },
    }),
    [helper]
  );

  const selectID = uniqueId("pebbles_select");

  return (
    <div>
      <Label htmlFor={selectID}>{label}</Label>
      <ReactSelectAsync
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

export default SelectAsync;
