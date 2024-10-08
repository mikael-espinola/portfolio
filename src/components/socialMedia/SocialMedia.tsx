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
        aria-label="GitHub"
        title="GitHub"
        target="_blank"
        $type="github"
        href="https://github.com/mikael-espinola  "
      >
        <FaGithub />
      </SocialMediaLink>
      <SocialMediaLink
        aria-label="LinkedIn"
        title="LinkedIn"
        target="_blank"
        $type="linkedin"
        href="https://www.linkedin.com/in/mikaelespinola/"
      >
        <FaLinkedin />
      </SocialMediaLink>
      <SocialMediaLink
        aria-label="Gmail"
        title="Gmail"
        target="_blank"
        $type="gmail"
        href="mailto:mikaelespinolaa@gmail.com"
      >
        <SiGmail />
      </SocialMediaLink>
    </Container>
  );
};

export default SocialMedia;
