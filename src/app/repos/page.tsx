import Header from "@/components/header/Header";
import Projects, { Data } from "@/components/projects/Projects";
import React from "react";
import { Container } from "./style";

const page = () => {
  return (
    <Container>
      <Header isRepoPage />
      <Projects />
    </Container>
  );
};

export default page;
