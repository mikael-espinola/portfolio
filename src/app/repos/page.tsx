import Header from "@/components/header/Header";
import Projects, { Data } from "@/components/projects/Projects";
import React from "react";
import { Container } from "./style";

interface Props {
  data: Data;
}

const page = ({ data }: Props) => {
  return (
    <Container>
      <Header isRepoPage />
      <Projects />
    </Container>
  );
};

export default page;
