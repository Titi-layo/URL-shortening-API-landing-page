import styled from "@emotion/styled";

export const StyledStatistics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  text-align: center;

  > h2 {
    font-size: 2rem;
  }

  .description {
    color: var(--grayish-violet);
    max-width: 550px;
    margin-top: 20px;
    font-weight: 700;
    font-size: 1.125rem;
  }

  @media (min-width: 768px) {
    padding: 70px 0;

    > h2 {
      font-size: 2.5rem;
    }
  }
`;
