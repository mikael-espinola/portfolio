"use client";

import React from "react";
import { Container, SocialMediaLink } from "./style";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <Container>
      <SocialMediaLink
        $type="whatsapp"
        href="https://wa.me/5584998995683"
        aria-label="Whatsapp"
        title="Whatsapp"
      >
        <FaWhatsapp />
      </SocialMediaLink>
      <SocialMediaLink
        aria-label="GitHub"
        title="GitHub"
        $type="github"
        href="https://github.com/mikael-espinola  "
      >
        <FaGithub />
      </SocialMediaLink>
      <SocialMediaLink
        aria-label="LinkedIn"
        title="LinkedIn"
        $type="linkedin"
        href="https://www.linkedin.com/in/mikaelespinola/"
      >
        <FaLinkedin />
      </SocialMediaLink>
      <SocialMediaLink
        aria-label="Gmail"
        title="Gmail"
        $type="gmail"
        href="mailto:mikaelespinolaa@gmail.com"
      >
        <SiGmail />
      </SocialMediaLink>
    </Container>
  );
};

export default SocialMedia;
