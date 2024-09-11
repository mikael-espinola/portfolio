"use client";

import React, { useState } from "react";
import { Container } from "./style";

const LangButton = () => {
  const [lang, setLang] = useState("en");
  const handleButton = () => {
    lang === "en" ? setLang("pt") : setLang("en");
  };
  return <Container onClick={handleButton}>{lang}</Container>;
};

export default LangButton;
