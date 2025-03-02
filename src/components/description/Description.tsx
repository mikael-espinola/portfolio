import React from "react";
import {
  Container,
  Heading,
  LangButtonBox,
  Paragraph,
  Span,
  Title,
} from "./style";
import { PiHandWavingFill } from "react-icons/pi";

interface Props {
  lang: string;
}

const Description = ({ lang }: Props) => {
  return (
    <Container>
      {lang === "en" ? (
        <Heading>
          <Title>
            Hey there! <PiHandWavingFill color="gold" />
          </Title>
          <Span>Welcome to my portfolio.</Span>
          <Paragraph>
            I am Mikael Espínola, a technology enthusiast and software
            developer. Currently, I am pursuing a degree in Software Engineering
            and constantly seeking to expand my knowledge and face new
            challenges. My goal is to become a full-stack professional capable
            of creating innovative and impactful solutions.
          </Paragraph>
        </Heading>
      ) : (
        <Heading>
          <Title>
            Olá! <PiHandWavingFill color="gold" />
          </Title>
          <Span>Bem-vindo(a) ao meu portfólio.</Span>
          <Paragraph>
            Sou o Mikael Espínola, um entusiasta de tecnologia e desenvolvedor
            de software. Atualmente, estou cursando Engenharia de Software e
            busco constantemente expandir meus conhecimentos e enfrentar novos
            desafios, com o objetivo de me tornar um profissional fullstack
            capaz de criar soluções inovadoras e impactantes.
          </Paragraph>
        </Heading>
      )}
    </Container>
  );
};

export default Description;
