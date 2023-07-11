import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { IButtonProps } from "./button";

export const StyledButton = styled.button<IButtonProps>`
  cursor: pointer;
  color: white;
  border-radius: ${(props) => (props?.shape === "square" ? "8px" : "20px")};
  background-color: ${(props) =>
    props.backgroundColor
      ? `var(--${props.backgroundColor},${props.backgroundColor})`
      : "var(--cyan)"};
  font-weight: 700;
  width: ${(props) => props?.width};

  :hover {
    opacity: 50%;
  }

  ${(props) =>
    props?.size === "small" &&
    css`
      font-size: 16px;
      padding: 8px 15px;
    `}

  ${(props) =>
    props?.size === "large" &&
    css`
      font-size: 18px;
      padding: 10px 25px;
    `}
`;

// background-color: var(--cyan);
