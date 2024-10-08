"use client";

import React from "react";
import { Button, Container, LinkBox } from "./style";
import LinkButton from "../linkButton/LinkButton";
import { useRefContext } from "@/contextApi/RefComponentsContext";
import { useLangContext } from "@/contextApi/LangProvider";

const Header = () => {
  const link = "/assets/files/download/CV_Mikael_Espinola.pdf";
  const { projectsRef, formsRef, homeRef } = useRefContext();
  const { lang } = useLangContext();

  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container>
      <LinkBox>
        <LinkButton />
      </LinkBox>
      <LinkBox>
        <Button onClick={scrollToUp}>
          {lang === "en" ? "Home" : "Início"}
        </Button>
        <Button onClick={() => handleRef(projectsRef)}>
          {" "}
          {lang === "en" ? "Projects" : "Projetos"}
        </Button>
        <Button onClick={() => handleRef(formsRef)}>
          {" "}
          {lang === "en" ? "Contact" : "Contato"}
        </Button>
        <LinkButton hRef={link} text={lang === "en" ? "Resume" : "CV"} />
      </LinkBox>
    </Container>
  );
};

export default Header;
