import React from "react";
import { Container, Label, RightsBox } from "./style";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <RightsBox>
        <Label>© {currentYear} | Mikael Espínola</Label>
      </RightsBox>
    </Container>
  );
};

export default Footer;
