"use client";

import sendEmail from "@/backend/emailjs";
import React, { FormEvent, useState } from "react";
import {
  Button,
  ButtonContainer,
  FormBox,
  Input,
  Label,
  MessageField,
  Title,
} from "./style";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");

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
    <>
      <Title>Entre em contato</Title>
      <FormBox onSubmit={handleSubmit}>
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
          required
        />
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          required
        />
        <Label htmlFor="whatsapp">Whatsapp</Label>
        <Input
          id="whatsapp"
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="Digite seu whatsapp com DDD"
        />
        <Label htmlFor="mensagem">Mensagem</Label>
        <MessageField
          id="mensagem"
          placeholder="Digite sua mensagem aqui..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ButtonContainer>
          <Button type="submit">Entrar em contato</Button>
        </ButtonContainer>
      </FormBox>
    </>
  );
};

export default Form;
