import { Section } from "../section/section";
import { Button } from "../button/button";
import { StyledBoost } from "./boost.styles";

export const Boost = () => {
  return (
    <Section background="dark-violet">
      <StyledBoost>
        <h2>Boost your links today</h2>
        <Button size="large">Get Started</Button>
      </StyledBoost>
    </Section>
  );
};
