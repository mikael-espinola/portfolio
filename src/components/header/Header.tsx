"use client";

import React from "react";
import { Container, LinkBox } from "./style";
import LinkButton from "../linkButton/LinkButton";

const Header = () => {
  const link = "/assets/files/download/CV_Mikael_Espinola.pdf";

  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <LinkBox>
        <LinkButton />
      </LinkBox>
      <LinkBox>
        <LinkButton onClick={scrollToUp} text="Início" />
        <LinkButton text="Projetos" />
        <LinkButton text="Contatos" />
        <LinkButton hRef={link} text="Currículo" />
      </LinkBox>
    </Container>
  );
};

export default Header;
