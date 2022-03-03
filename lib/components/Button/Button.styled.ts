import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";

// GLOBAL DEFINITIONS

const baseButtonCSS = css`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-style: solid;
  font-family: ${({ theme }) => theme.buttons.fontFamily};

  &,
  & * {
    font-weight: ${({ theme }) => theme.buttons.fontWeight};
  }

  & path {
    fill: currentColor;
    fill-rule: evenodd;
  }
`;

const baseIconCSS = css`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

// REGULAR BUTTON DEFINITIONS

const buttonSizeCSS = css<Pick<ButtonProps, "buttonSize">>`
  ${({ buttonSize, theme }) => css`
    padding: ${theme.buttons.regular[buttonSize].verticalPadding}
      ${theme.buttons.regular[buttonSize].horizontalPadding};

    border-radius: ${theme.buttons.regular[buttonSize].borderRadius};
    font-size: ${theme.buttons.regular[buttonSize].fontSize};
  `}
`;

const buttonDisabledCSS = css<Pick<ButtonProps, "buttonStyle">>`
  ${({ theme, buttonStyle }) => css`
    background: ${theme.buttons.regular.disabled[buttonStyle].background};
    border-color: ${theme.buttons.regular.disabled[buttonStyle].borderColor};
    border-width: ${theme.buttons.regular.disabled[buttonStyle].borderWidth};
    color: ${theme.buttons.regular.disabled[buttonStyle].contentColor};
  `}
`;

const buttonVariantCSS = css<Pick<ButtonProps, "buttonStyle" | "variant">>`
  ${({ theme, buttonStyle, variant }) => css`
    background: ${theme.buttons.regular[variant][buttonStyle].background};
    border-color: ${theme.buttons.regular[variant][buttonStyle].borderColor};
    border-width: ${theme.buttons.regular[variant][buttonStyle].borderWidth};
    color: ${theme.buttons.regular[variant][buttonStyle].contentColor};
  `}
`;

export const RegularButton = styled.button<
  Pick<ButtonProps, "buttonSize" | "buttonStyle" | "variant">
>`
  ${baseButtonCSS}
  ${buttonSizeCSS}
  
  ${({ disabled }) => (disabled ? buttonDisabledCSS : buttonVariantCSS)}
`;

const startIconMargin = css<Pick<ButtonProps, "buttonSize">>`
  margin-right: ${({ theme, buttonSize }) =>
    theme.buttons.regular[buttonSize].iconPadding};
`;

export const StartIcon = styled.div<Pick<ButtonProps, "buttonSize">>`
  ${baseIconCSS}
  ${startIconMargin}
`;

const endIconMargin = css<Pick<ButtonProps, "buttonSize">>`
  margin-left: ${({ theme, buttonSize }) =>
    theme.buttons.regular[buttonSize].iconPadding};
`;

export const EndIcon = styled.div<Pick<ButtonProps, "buttonSize">>`
  ${baseIconCSS}
  ${endIconMargin}
`;

// ICON BUTTON DEFINITIONS

const iconButtonSizeCSS = css<Pick<ButtonProps, "buttonSize">>`
  ${({ buttonSize, theme }) => css`
    padding: ${theme.buttons.icon[buttonSize].verticalPadding}
      ${theme.buttons.icon[buttonSize].horizontalPadding};

    border-radius: ${theme.buttons.icon[buttonSize].borderRadius};
    font-size: ${theme.buttons.icon[buttonSize].fontSize};
  `}
`;

const iconButtonIconSizeCSS = css<Pick<ButtonProps, "buttonSize">>`
  width: ${({ theme, buttonSize }) =>
    theme.buttons.icon[buttonSize].buttonSize};
  height: ${({ theme, buttonSize }) =>
    theme.buttons.icon[buttonSize].buttonSize};
`;

export const IconButtonIcon = styled.div<Pick<ButtonProps, "buttonSize">>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  ${iconButtonIconSizeCSS}
`;

export const IconButton = styled.button<
  Pick<ButtonProps, "buttonSize" | "buttonStyle" | "variant">
>`
  ${baseButtonCSS}
  ${iconButtonSizeCSS}

  ${({ disabled }) => (disabled ? buttonDisabledCSS : buttonVariantCSS)}
`;
