import React, { ComponentPropsWithoutRef } from "react";
import { StyledButton } from "./button.styles";

export interface IButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode | undefined;
  size?: "small" | "large";
  shape?: "round" | "square";
  href?: string;
  width?: string;
  backgroundColor?: string;
}

export const Button = ({
  children,
  size = "small",
  shape = "round",
  width,
  backgroundColor,
  ...otherProps
}: IButtonProps) => {
  return (
    <StyledButton
      size={size}
      shape={shape}
      width={width}
      backgroundColor={backgroundColor}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
};
