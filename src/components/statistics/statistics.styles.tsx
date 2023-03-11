import styled from "@emotion/styled";

export const StyledStatistics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  > h2 {
    font-size: 2rem;
  }

  .description {
    color: var(--grayish-violet);
    max-width: 600px;
    text-align: center;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    > h2 {
      font-size: 2.5rem;
    }
  }
`;
