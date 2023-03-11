import styled from "@emotion/styled";
import { css } from "@emotion/react";
import desktopBg from "/bg-shorten-desktop.svg";

export const StyledLinkInput = styled.div`
  background-color: red;
`;

export const StyledForm = styled.form`
  background-color: var(--dark-violet);
  background-image: url("/bg-shorten-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 15px;
  border-radius: 10px;

  input {
    border-radius: 10px;
    flex: 1;
    padding: 15px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
