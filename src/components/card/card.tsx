import Image from "next/image";
import { ReactNode } from "react";
import { StyledCard } from "./card.styles";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}

export default function Card({
  title,
  description,
  image,
  children,
  imageAlt,
}: CardProps) {
  return (
    <StyledCard>
      {image && <Image src={image} alt={imageAlt} width="60" height="60" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledCard>
  );
}
