import styled from "@emotion/styled";

export const StyledShortenedCard = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 5px;
  padding: 15px;
  gap: 10px;

  hr {
    width: 100% + 10px;
    color: red;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .url {
    color: var(--cyan);
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 15px;
    align-items: center;

    > div {
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }

    hr {
      display: none;
    }
  }
`;
