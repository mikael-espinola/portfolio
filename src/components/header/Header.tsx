import React from "react";
import { Container, LinkBox } from "./style";
import LinkButton from "../linkButton/LinkButton";

const Header = () => {
  const link =
    "https://drive.google.com/uc?export=download&id=1Tx0QTpgO3J-oBFgazl0TivDN21at0vCy";
  return (
    <Container>
      <LinkBox>
        <LinkButton />
      </LinkBox>
      <LinkBox>
        <LinkButton text="Início" />
        <LinkButton text="Projectos" />
        <LinkButton text="Contactos" />
        <LinkButton target="_blank" hRef={link} text="Currículo" />
      </LinkBox>
    </Container>
  );
};

export default Header;
