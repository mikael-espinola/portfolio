"use client";
import React, { AnchorHTMLAttributes } from "react";
import { Container, Title } from "./style";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  hRef?: string;
  text?: string;
}

const LinkButton = ({ hRef, text, ...rest }: Props) => {
  return (
    <Container text={text} href={hRef ? hRef : "/"}>
      {text ? (
        text
      ) : text === "curriculo" ? (
        <a
          download="CV_Mikael_Espinola.pdf"
          href={hRef && hRef}
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        <Title>Mikael Espínola</Title>
      )}
    </Container>
  );
};

export default LinkButton;
