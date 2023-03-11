import { StyledSection, SectionProps } from "./section.styles";

export const Section = ({ children, background }: SectionProps) => {
  return <StyledSection background={background}>{children}</StyledSection>;
};
