"use client";

import sendEmail from "@/backend/emailjs";
import React, { FormEvent, useState } from "react";
import {
  Button,
  ButtonContainer,
  Container,
  FormBox,
  Input,
  Label,
  MessageField,
  Title,
} from "./style";
import { useRefContext } from "@/contextApi/RefComponentsContext";
import { useLangContext } from "@/contextApi/LangProvider";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");
  const { formsRef } = useRefContext();
  const { lang } = useLangContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = {
      email,
      name,
      whatsapp,
      message,
    };
    sendEmail(values);
    setEmail("");
    setWhatsapp("");
    setName("");
    setMessage("");
  };
  return (
    <Container>
      <Title ref={formsRef}>
        {lang === "en" ? "Contact me" : "Entre em contato"}
      </Title>
      <FormBox onSubmit={handleSubmit}>
        <Label htmlFor="name">{lang === "en" ? "Name" : "Nome"}</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={lang === "en" ? "Enter your name" : "Digite seu nome"}
          required
        />
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={
            lang === "en" ? "Enter your e-mail" : "Digite seu e-mail"
          }
          required
        />
        <Label htmlFor="whatsapp">Whatsapp</Label>
        <Input
          id="whatsapp"
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder={
            lang === "en"
              ? "Enter your complete whatsapp number"
              : "Digite seu whatsapp com DDD"
          }
        />
        <Label htmlFor="mensagem">
          {lang === "en" ? "Message" : "Mensagem"}
        </Label>
        <MessageField
          id="mensagem"
          placeholder={
            lang === "en"
              ? "Enter your message here"
              : "Digite sua mensagem aqui"
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ButtonContainer>
          <Button type="submit">
            {lang === "en" ? "Send message" : "Entrar em contato"}
          </Button>
        </ButtonContainer>
      </FormBox>
    </Container>
  );
};

export default Form;
