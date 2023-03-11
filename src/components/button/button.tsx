import React from "react";
import { StyledButton } from "./button.styles";

export interface IButtonProps {
  children: React.ReactNode | undefined;
  size?: "small" | "large";
  shape?: "round" | "square";
  href?: string;
  width?: string;
}

export const Button = ({
  children,
  size = "small",
  shape = "round",
  width,
}: IButtonProps) => {
  return (
    <StyledButton size={size} shape={shape} width={width}>
      {children}
    </StyledButton>
  );
};
