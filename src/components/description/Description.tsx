import React from "react";
import { Container, Heading, Paragraph, Span, Title } from "./style";
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
            I’m Mikael Espínola, a passionate Software Developer currently
            volunteering as a Front-end Developer at Lacrei Saúde. As a Software
            Engineering student, I am always seeking to expand my knowledge,
            with the goal of becoming a Fullstack Software Engineer.
          </Paragraph>
          <Paragraph>
            In my daily routine at Lacrei Saúde, I’ve been involved in
            implementing new features and refactoring code to fix bugs, using
            technologies like Next.js, React.js, TypeScript, and
            Styled-components, among others. Additionally, I have worked on
            personal and academic projects, consistently applying best practices
            and exploring new technologies to develop innovative solutions.
          </Paragraph>
          <Paragraph>
            I am seeking new opportunities where I can contribute my passion for
            development and continue my professional growth. I am particularly
            interested in collaborative environments that value innovation and
            continuous learning.
          </Paragraph>
        </Heading>
      ) : (
        <Heading>
          <Title>
            Olá! <PiHandWavingFill color="gold" />
          </Title>
          <Span>Bem-vindo(a) ao meu portfólio.</Span>
          <Paragraph>
            Sou Mikael Espínola, um desenvolvedor de software apaixonado,
            atualmente atuando como desenvolvedor front-end voluntário na Lacrei
            Saúde. Como estudante de Engenharia de Software, estou sempre em
            busca de expandir meus conhecimentos, com o objetivo de me tornar um
            engenheiro de software fullstack.
          </Paragraph>
          <Paragraph>
            Na minha trajetória na Lacrei Saúde, tenho participado da
            implementação de novas funcionalidades e da refatoração de código
            para corrigir bugs, utilizando tecnologias como Next.js, React.js,
            TypeScript e Styled-components, entre outras. Além disso, trabalhei
            em projetos pessoais e acadêmicos, aplicando consistentemente as
            melhores práticas e explorando novas tecnologias para desenvolver
            soluções inovadoras.
          </Paragraph>
          <Paragraph>
            Estou em busca de novas oportunidades onde possa contribuir com
            minha paixão por desenvolvimento e continuar meu crescimento
            profissional. Estou particularmente interessado em ambientes
            colaborativos que valorizem inovação e aprendizado contínuo.
          </Paragraph>
        </Heading>
      )}
    </Container>
  );
};

export default Description;
