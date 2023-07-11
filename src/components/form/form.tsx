import React, { useState, useEffect } from "react";
import { Button } from "../button/button";
import { Container } from "../container/container";
import { Section } from "../section/section";
import { StyledForm } from "./form.styles";
import { ShortenedList } from "../shortened-list/shortened-list";
import { ShortApiResp } from "../shortened-list/shortened-card";

export const Form = () => {
  const [inputText, setInputText] = useState("");
  const [validationMsg, setValidationMsg] = useState(false);
  const [shortenedUrls, setshortenedUrls] = useState<ShortApiResp[]>([]);

  const handleChange = (input: any) => {
    setInputText(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText) {
      setValidationMsg(true);
      return;
    }
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputText}`)
      .then((res) => res.json())
      .then((output) => {
        const updatedUrls = [...shortenedUrls, output.result];
        localStorage.setItem("shrtCode", JSON.stringify(updatedUrls));
        setshortenedUrls(updatedUrls);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("shrtCode")) {
      const val = JSON.parse(localStorage.getItem("shrtCode") as string);
      setshortenedUrls(val);
    }
  }, []);

  return (
    <>
      <Section background="white-gray">
        <Container>
          <StyledForm>
            <input
              type="text"
              placeholder="Shorten a link here..."
              onChange={(e) => handleChange(e.target.value)}
              value={inputText}
              className={validationMsg ? "validation-active" : ""}
            />
            <Button
              size="large"
              shape="square"
              type="submit"
              onClick={handleSubmit}
            >
              Shorten It!
            </Button>

            {validationMsg && (
              <p className="validation-msg validation-active">
                Please add a link
              </p>
            )}
          </StyledForm>
        </Container>
      </Section>
      <Section background="light-gray">
        <Container>
          <ShortenedList list={shortenedUrls} />
        </Container>
      </Section>
    </>
  );
};
