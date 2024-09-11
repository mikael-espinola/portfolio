import React from "react";
import { Container, LinkBox } from "./style";
import LinkButton from "../linkButton/LinkButton";

const Header = () => {
  const link = "/assets/files/download/CV_Mikael_Espinola.pdf";
  return (
    <Container>
      <LinkBox>
        <LinkButton />
      </LinkBox>
      <LinkBox>
        <LinkButton text="Início" />
        <LinkButton text="Projectos" />
        <LinkButton text="Contactos" />
        <LinkButton hRef={link} text="Currículo" />
      </LinkBox>
    </Container>
  );
};

export default Header;
