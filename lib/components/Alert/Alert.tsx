/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren, ReactNode, useContext } from "react";
import { BsX } from "react-icons/bs";
import styled, { ThemeContext } from "styled-components";
import { colorTokens, shadeTokens, spacingTokens } from "../../types/tokens";
import Box, { BoxProps } from "../Box";
import Button from "../Button";
import { Text } from "../Typography";

const IconBox = styled(Box)<{ color: colorTokens; shade: shadeTokens }>`
  color: ${({ theme, color, shade }) => theme.colors[color][shade]};
`;

const StyledBox = styled(Box)<{
  horizontalPadding: spacingTokens;
  verticalPadding: spacingTokens;
}>`
  padding: ${({ horizontalPadding, verticalPadding, padding, theme }) => {
    if (padding) return theme.spacings[padding];
    return `${theme.spacings[verticalPadding]} ${theme.spacings[horizontalPadding]}`;
  }};

  justify-items: start;
`;

export interface AlertProps extends BoxProps {
  status?: colorTokens;
  icon?: ReactNode;
  onPrimaryButtonClicked?: () => void;
  primaryButtonContents?: ReactNode;
  primaryButtonIconStart?: ReactNode;
  primaryButtonIconEnd?: ReactNode;
  onSecondaryButtonClicked?: () => void;
  secondaryButtonContents?: ReactNode;
  secondaryButtonIconStart?: ReactNode;
  secondaryButtonIconEnd?: ReactNode;
  onCloseClicked?: () => void;
}

export default function Alert(props: PropsWithChildren<AlertProps>) {
  const theme = useContext(ThemeContext);

  const {
    status = "primary",
    children,
    icon,
    onPrimaryButtonClicked,
    primaryButtonContents,
    primaryButtonIconEnd,
    primaryButtonIconStart,
    onSecondaryButtonClicked,
    secondaryButtonContents,
    secondaryButtonIconEnd,
    secondaryButtonIconStart,
    onCloseClicked,

    shadow = "xSmall",
    width = "12/12",
    align = "center",
    display = "grid",
    gridColumns = "max-content 1fr max-content max-content",
    colGap = "sm",
    ...rest
  } = props;

  const color = theme.alert.colors[status].backgroundColor;
  const shade = theme.alert.colors[status].backgroundShade;

  const textType = theme.alert.textType;
  const textColor = theme.alert.colors[status].textColor;
  const textShade = theme.alert.colors[status].textShade;

  const iconColor = theme.alert.colors[status].iconColor;
  const iconShade = theme.alert.colors[status].iconShade;

  const primaryButtonStyle = theme.alert.buttons[status].primaryButtonStyle;
  const primaryButtonVariant = theme.alert.buttons[status].primaryButtonVariant;

  const secondaryButtonStyle = theme.alert.buttons[status].secondaryButtonStyle;
  const secondaryButtonVariant =
    theme.alert.buttons[status].secondaryButtonVariant;

  return (
    <StyledBox
      width={width}
      align={align}
      backgroundColor={color}
      backgroundShade={shade}
      borderRadius={theme.alert.borderRadius}
      display={display}
      gridColumns={gridColumns}
      horizontalPadding={theme.alert.horizontalPadding}
      verticalPadding={theme.alert.verticalPadding}
      colGap={colGap}
      shadow={shadow}
      {...rest}
    >
      {icon && (
        <IconBox color={iconColor} shade={iconShade}>
          {icon}
        </IconBox>
      )}

      <Text type={textType} color={textColor} shade={textShade}>
        {children}
      </Text>

      {(!!onPrimaryButtonClicked || !!onSecondaryButtonClicked) && (
        <Box direction="row" colGap="sm">
          {!!onSecondaryButtonClicked && (
            <Button
              variant={secondaryButtonVariant}
              buttonStyle={secondaryButtonStyle}
              endIcon={secondaryButtonIconEnd}
              startIcon={secondaryButtonIconStart}
              onClick={onSecondaryButtonClicked}
            >
              {secondaryButtonContents}
            </Button>
          )}
          {!!onPrimaryButtonClicked && (
            <Button
              variant={primaryButtonVariant}
              buttonStyle={primaryButtonStyle}
              endIcon={primaryButtonIconEnd}
              startIcon={primaryButtonIconStart}
              onClick={onPrimaryButtonClicked}
            >
              {primaryButtonContents}
            </Button>
          )}
        </Box>
      )}

      {!!onCloseClicked && (
        <Box padding="xxsm" onClick={onCloseClicked}>
          <BsX color={theme.colors[iconColor][iconShade]} />
        </Box>
      )}
    </StyledBox>
  );
}
