"use client";

import React from "react";
import { Container } from "./style";
import { useLangContext } from "@/contextApi/LangProvider";

const LangButton = () => {
  const { lang, setLang } = useLangContext();
  const handleButton = (): void => {
    setLang(() => (lang === "en" ? "pt" : "en"));
  };
  return <Container onClick={handleButton}>{lang}</Container>;
};

export default LangButton;
