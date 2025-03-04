"use client";
import React from "react";
import Form from "../formContact/Form";
import { useLangContext } from "@/contextApi/LangProvider";
import { useRefContext } from "@/contextApi/RefComponentsContext";
import { Title } from "../formContact/style";
import SocialMedia from "../socialMedia/SocialMedia";
import { Box, Container, SocialWrapper, Span } from "./style";

const Contacts = () => {
  const { lang } = useLangContext();
  const { formsRef } = useRefContext();
  return (
    <Container>
      <Title ref={formsRef}>
        {lang === "en" ? "Contact me" : "Entre em contato"}
      </Title>
      <SocialWrapper>
        <Box>
          <SocialMedia />
        </Box>
      </SocialWrapper>
      <Span>{lang === "en" ? "Or" : "Ou"}</Span>
      <Form />
    </Container>
  );
};

export default Contacts;
