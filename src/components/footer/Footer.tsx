import React from "react";
import { Container, Label } from "./style";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <div className="rights-container">
        <Label>© {currentYear} | Mikael Espínola</Label>
      </div>
    </Container>
  );
};

export default Footer;
