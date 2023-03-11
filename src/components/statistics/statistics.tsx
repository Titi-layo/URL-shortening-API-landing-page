import { Section } from "../section/section";
import { StyledStatistics } from "./statistics.styles";
import { Container } from "../container/container";
import Card from "../card/card";

export const Statistics = () => {
  return (
    <Section background="light-gray">
      <Container>
        <StyledStatistics>
          <h2>Advanced Statistics</h2>
          <p className="description">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <Card
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content"
            image={"/icon-brand-recognition.svg"}
            imageAlt={"Brand recognition"}
          />
        </StyledStatistics>
      </Container>
    </Section>
  );
};
