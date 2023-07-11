import styled from "@emotion/styled";

export const StyledSocials = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  svg {
    cursor: pointer;
  }

  a:hover {
    path {
      fill: var(--cyan);
    }
  }
`;
