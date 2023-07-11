import Image from "next/image";
import { ReactNode } from "react";
import { StyledCard } from "./card.styles";
import { Ident } from "../ident/ident";

export interface CardProps {
  title: string;
  description: string;
  image?: ReactNode;
  // imageAlt?: string;
  // children?: ReactNode;
  items?: number;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <StyledCard>
      {image}
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledCard>
  );
}
