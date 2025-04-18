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

      <div className="my-3 w-full p-2 flex justify-center relative">
        <div className=" h-px rounded w-50  bg-black"></div>
        <span className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 text-md gradient-span bg-black text-white rounded-md">
          {lang === "en" ? "Or" : "Ou"}
        </span>
      </div>
      <Form />
    </Container>
  );
};

export default Contacts;
