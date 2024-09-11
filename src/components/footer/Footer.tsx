import React from "react";
import { Container } from "./style";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <div className="rights-container">
        <label>{currentYear} | All rights reserved.</label>
      </div>
    </Container>
  );
};

export default Footer;
