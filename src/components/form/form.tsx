import React from "react";
import { Button } from "../button/button";
import { Container } from "../container/container";
import { Section } from "../section/section";
import { StyledLinkInput, StyledForm } from "./form.styles";

export const Form = () => {
  return (
    <Section background="white-gray">
      <Container>
        <StyledForm>
          <input placeholder="Shorten a link here..." />
          <Button size="large" shape="square">
            Shorten It!
          </Button>
        </StyledForm>
      </Container>
    </Section>
  );
};
