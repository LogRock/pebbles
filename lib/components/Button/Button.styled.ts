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

  &:active {
    outline: ${({ theme }) => theme.buttons.outline};
  }
`;

const baseIconCSS = css`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

// REGULAR BUTTON DEFINITIONS

const buttonSizeCSS = css<
  Pick<ButtonProps, "buttonSize" | "variant" | "buttonStyle">
>`
  ${({ buttonSize, variant, buttonStyle, theme }) => css`
    padding: ${theme.buttons.regular[buttonSize || "medium"].verticalPadding}
      ${theme.buttons.regular[buttonSize || "medium"].horizontalPadding};

    border-radius: ${theme.buttons.regular[variant || "primary"][
      buttonStyle || "primary"
    ].borderRadius ||
    theme.buttons.regular[buttonSize || "medium"].borderRadius};

    box-shadow: ${theme.buttons.regular[variant || "primary"][
      buttonStyle || "primary"
    ].boxShadow};
    filter: ${theme.buttons.regular[variant || "primary"][
      buttonStyle || "primary"
    ].filter};

    font-size: ${theme.buttons.regular[buttonSize || "medium"].fontSize};
  `}
`;

const buttonDisabledCSS = css<Pick<ButtonProps, "buttonStyle">>`
  ${({ theme, buttonStyle }) => css`
    border-width: ${theme.buttons.regular.disabled[buttonStyle || "primary"]
      .borderWidth};
    border-color: ${theme.buttons.regular.disabled[buttonStyle || "primary"]
      .borderColor};

    background: ${theme.buttons.regular.disabled[buttonStyle || "primary"]
      .background};

    color: ${theme.buttons.regular.disabled[buttonStyle || "primary"]
      .contentColor};

    cursor: not-allowed;
  `}
`;

const buttonVariantCSS = css<Pick<ButtonProps, "buttonStyle" | "variant">>`
  ${({ theme, buttonStyle, variant }) => css`
    border-width: ${theme.buttons.regular[variant || "primary"][
      buttonStyle || "primary"
    ].borderWidth};
    border-color: ${theme.buttons.regular[variant || "primary"][
      buttonStyle || "primary"
    ].borderColor};

    background: ${theme.buttons.regular[variant || "primary"][
      buttonStyle || "primary"
    ].background};

    color: ${theme.buttons.regular[variant || "primary"][
      buttonStyle || "primary"
    ].contentColor};
    text-decoration-line: ${theme.buttons.regular[variant || "primary"][
      buttonStyle || "primary"
    ].textDecorationLine || "none"};

    cursor: pointer;

    &:hover {
      filter: brightness(1.05);
    }
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
    theme.buttons.regular[buttonSize || "medium"].iconPadding};
`;

export const StartIcon = styled.div<Pick<ButtonProps, "buttonSize">>`
  ${baseIconCSS}
  ${startIconMargin}
`;

const endIconMargin = css<Pick<ButtonProps, "buttonSize">>`
  margin-left: ${({ theme, buttonSize }) =>
    theme.buttons.regular[buttonSize || "medium"].iconPadding};
`;

export const EndIcon = styled.div<Pick<ButtonProps, "buttonSize">>`
  ${baseIconCSS}
  ${endIconMargin}
`;

// ICON BUTTON DEFINITIONS

const iconButtonSizeCSS = css<Pick<ButtonProps, "buttonSize">>`
  ${({ buttonSize, theme }) => css`
    padding: ${theme.buttons.icon[buttonSize || "medium"].verticalPadding}
      ${theme.buttons.icon[buttonSize || "medium"].horizontalPadding};

    border-radius: ${theme.buttons.icon[buttonSize || "medium"].borderRadius};

    font-size: ${theme.buttons.icon[buttonSize || "medium"].fontSize};
  `}
`;

const iconButtonIconSizeCSS = css<Pick<ButtonProps, "buttonSize">>`
  width: ${({ theme, buttonSize }) =>
    theme.buttons.icon[buttonSize || "medium"].buttonSize};
  height: ${({ theme, buttonSize }) =>
    theme.buttons.icon[buttonSize || "medium"].buttonSize};
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
