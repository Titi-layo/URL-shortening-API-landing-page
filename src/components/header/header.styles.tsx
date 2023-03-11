import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  color: red;
  padding: 28px 0;

  .wrapper {
    display: flex;
    justify-content: space-between;

    > svg {
      max-width: none;
    }

    .faBars {
      border: none;
      padding: 0px;
      margin: 0px;
      background: none;

      svg {
        width: 32px;
        height: 32px;

        path {
          fill: var(--gray);
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;

    .faBars {
      display: none;
    }
  }
`;
