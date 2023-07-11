import styled from "@emotion/styled";
import { css } from "@emotion/react";

type CardsProps = {
  noOfCards: number;
};

export const StyledCards = styled.div<CardsProps>`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  gap: 85px;
  align-items: flex-start;
  position: relative;

  > * {
    position: relative;
  }

  &::before {
    background: var(--cyan);
    content: "";
    height: 100%;
    width: 8px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-4px);
  }

  @media (min-width: 768px) {
    display: flex;
    gap: 35px;
    flex-direction: row;
    align-items: flex-start;
    --stagger: 60px;

    &::before {
      background: var(--cyan);
      content: "";
      height: 8px;
      width: 100%;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-2px);
    }

    ${(props) =>
      props.noOfCards === 3 &&
      css`
        --stagger: 40px;
      `}

    ${(props) =>
      props.noOfCards === 4 &&
      css`
        --stagger: 20px;
      `}

    ${(props) =>
      Array.from({ length: props.noOfCards }).map(
        (item, idx) => css`
          > *:nth-child(${idx + 1}) {
            margin-top: calc(var(--stagger) * ${idx + 1});
          }
        `
      )}
  }

  // Example of animation
  @keyframes stagger {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
