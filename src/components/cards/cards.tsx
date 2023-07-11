import { CardProps } from "../card/card";
import Card from "../card/card";
import { StyledCards } from "./cards.styles";
import { Ident } from "../ident/ident";

const advancedStats = [
  {
    title: "Brand Recognition",
    description: `Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content`,
    image: "/icon-brand-recognition.svg",
    imageAlt: "Brand recognition",
  },
  {
    title: "Detailed Records",
    description: `Gain insights into who is clicking your links. Knowing when and where
  people engage with your content helps inform better decisions.`,
    image: "/icon-detailed-records.svg",
    imageAlt: "Detailed Records",
  },
  {
    title: "Fully Customizable",
    description: `Improve brand awareness and content discoverability through customizable
  links, supercharging audience engagement.`,
    image: "/icon-fully-customizable.svg",
    imageAlt: "Fully Customizable",
  },
];

export default function Cards() {
  return (
    <StyledCards noOfCards={advancedStats.length}>
      {advancedStats.map((stat) => (
        <Card
          key={stat.title}
          title={stat.title}
          description={stat.description}
          image={<Ident src={stat.image} alt={stat.imageAlt} />}
        />
      ))}
    </StyledCards>
  );
}
