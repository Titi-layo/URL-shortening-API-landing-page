import { Section } from "../section/section";
import { StyledStatistics } from "./statistics.styles";
import { Container } from "../container/container";
import Cards from "../cards/cards";

export const Statistics = () => {
  return (
    <Section background="light-gray">
      <Container>
        <StyledStatistics>
          <h2>Advanced Statistics</h2>
          <div className="description">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </div>
          <Cards />
        </StyledStatistics>
      </Container>
    </Section>
  );
};
