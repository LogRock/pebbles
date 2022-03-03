import React, { FC } from "react";
import {
  IconButton,
  RegularButton,
  StartIcon,
  EndIcon,
  IconButtonIcon,
} from "./Button.styled";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({
  buttonSize = "medium",
  variant = "primary",
  buttonStyle = "primary",
  iconOnly = false,
  startIcon = null,
  endIcon = null,
  children,
  ...rest
}) => {
  if (iconOnly)
    return (
      <IconButton
        {...rest}
        variant={variant}
        buttonStyle={buttonStyle}
        buttonSize={buttonSize}
      >
        <IconButtonIcon buttonSize={buttonSize}>
          {startIcon || endIcon}
        </IconButtonIcon>
      </IconButton>
    );

  return (
    <RegularButton
      {...rest}
      variant={variant}
      buttonStyle={buttonStyle}
      buttonSize={buttonSize}
    >
      {startIcon && <StartIcon buttonSize={buttonSize}>{startIcon}</StartIcon>}
      {children}
      {endIcon && <EndIcon buttonSize={buttonSize}>{endIcon}</EndIcon>}
    </RegularButton>
  );
};

export default Button;
