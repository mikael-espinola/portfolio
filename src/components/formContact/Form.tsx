"use client";

import sendEmail from "@/backend/emailjs";
import React, { FormEvent, useEffect, useState } from "react";
import {
  Button,
  ButtonContainer,
  Container,
  FormBox,
  InputItem,
  InputWrapper,
  LabelItem,
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
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const { formsRef } = useRefContext();
  const { lang } = useLangContext();

  useEffect(() => {
    if (status === "OK") {
      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  }, [status]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = {
      email,
      name,
      whatsapp,
      message,
      setIsSending,
      setStatus,
    };
    sendEmail(values);
    setEmail("");
    setWhatsapp("");
    setName("");
    setMessage("");
  };
  return (
    <Container>
      <FormBox onSubmit={handleSubmit}>
        <InputWrapper>
          <InputItem
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <LabelItem
            aria-label={
              lang === "en" ? "Enter your Name" : "Digite aqui o seu nome"
            }
            htmlFor="name"
          >
            {lang === "en" ? "Name" : "Nome"}
          </LabelItem>
        </InputWrapper>
        <InputWrapper>
          <InputItem
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <LabelItem
            aria-label={
              lang === "en" ? "Enter your e-mail" : "Digite aqui o seu e-mail"
            }
            htmlFor="email"
          >
            E-mail
          </LabelItem>
        </InputWrapper>
        <InputWrapper>
          <InputItem
            id="whatsapp"
            type="text"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
          />
          <LabelItem
            aria-label={
              lang === "en"
                ? "Enter your whatsapp"
                : "Digite aqui o seu whatsapp"
            }
            htmlFor="whatsapp"
          >
            Whatsapp
          </LabelItem>
        </InputWrapper>
        <InputWrapper>
          <MessageField
            id="mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <LabelItem
            aria-label={
              lang === "en" ? "Enter your request" : "Digite sua solicitação"
            }
            htmlFor="mensagem"
          >
            {lang === "en" ? "How can I help you?" : "Como posso te ajudar?"}
          </LabelItem>
        </InputWrapper>

        <ButtonContainer>
          <Button $status={status === "OK" ? true : false} type="submit">
            {isSending
              ? lang === "en"
                ? "Sending..."
                : "Enviando..."
              : status === "OK"
              ? lang === "en"
                ? "Message sent"
                : "Mensagem enviada"
              : lang === "en"
              ? "Contact Us"
              : "Solicitar contato"}
          </Button>
        </ButtonContainer>
      </FormBox>
    </Container>
  );
};

export default Form;
