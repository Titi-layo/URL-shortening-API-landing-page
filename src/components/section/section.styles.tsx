import styled from "@emotion/styled";
import { css } from "@emotion/react";

export type SectionProps = {
  children: React.ReactNode | undefined;
  background?: string;
};

export const StyledSection = styled.div<SectionProps>`
  ${(props) =>
    props?.background === "white-gray"
      ? css`
          background: linear-gradient(
            to top,
            var(--light-gray) 0%,
            var(--light-gray) 50%,
            #fff 50%,
            #fff 100%
          );
        `
      : css`
          background: var(--${props.background}, ${props.background});
        `}
`;
