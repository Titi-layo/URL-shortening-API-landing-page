import styled from "@emotion/styled";

export const StyledSocials = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;

  img {
    cursor: pointer;
  }

  > svg:hover {
    fill: var(--cyan);
  }
`;
