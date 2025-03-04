"use client";

import React from "react";
import { Button, Container, Link, LinkBox } from "./style";
import LinkButton from "../linkButton/LinkButton";
import { useRefContext } from "@/contextApi/RefComponentsContext";
import { useLangContext } from "@/contextApi/LangProvider";
import LangButton from "../languageButton/LangButton";
import { TbFileCv } from "react-icons/tb";

interface Props {
  isRepoPage?: boolean;
}

const Header = ({ isRepoPage }: Props) => {
  const link = "./files/download/CV_Mikael_Espinola.pdf";
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
    <Container $isRepoPage={isRepoPage}>
      <LinkBox>
        <LinkButton />
      </LinkBox>
      {!isRepoPage ? (
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
          <Link
            title="curriculum vitae résumé"
            rel="noopner noreferrer"
            target="_blank"
            href={link}
          >
            <TbFileCv />
          </Link>
          <LangButton />
        </LinkBox>
      ) : (
        <LinkBox>
          <Link
            title="curriculum vitae résumé"
            rel="noopner noreferrer"
            target="_blank"
            href={link}
          >
            <TbFileCv />
          </Link>
          <LangButton />
        </LinkBox>
      )}
    </Container>
  );
};

export default Header;
