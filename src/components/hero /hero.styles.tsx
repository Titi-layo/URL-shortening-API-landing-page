import styled from "@emotion/styled";
import { StyledContainer } from "../container/container.styles";

export const StyledHero = styled.div`
  margin-bottom: 100px;
  text-align: center;
  .description {
    color: var(--grayish-violet);
    margin: 15px 0 15px;
  }
  button {
    width: unset;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  svg {
    --width: 160px;
    --offset: 0;
    transform: translateX(var(--offset));
    max-width: calc(100% + var(--width));
    width: calc(100% + var(--width));
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    margin-bottom: 30px;
    > div {
      align-items: center;
      display: flex;
      flex-direction: row-reverse;
      gap: 2rem;

      .text,
      .illustration {
        flex: 1;
      }

      svg {
        --width: 120px;
        --offset: 120px;
        margin-bottom: unset;
      }
    }
    text-align: left;
    h1 {
      font-size: 4rem;
    }

    .description {
      font-size: 1.25rem;
    }
  }
`;
