import Header from "@/components/header/Header";
import Projects, { Data } from "@/components/projects/Projects";
import React from "react";

interface Props {
  data: Data;
}

const page = ({ data }: Props) => {
  return (
    <div>
      <Header isRepoPage />
      <Projects />
    </div>
  );
};

export default page;
