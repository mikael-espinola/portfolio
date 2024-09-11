import React, { AnchorHTMLAttributes } from "react";
import { Container, Title } from "./style";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  hRef?: string;
  text?: string;
}

const LinkButton = ({ hRef, text, ...rest }: Props) => {
  return (
    <Container href={hRef ? hRef : "/"}>
      {text ? text : <Title>Mikael Espínola</Title>}
    </Container>
  );
};

export default LinkButton;
