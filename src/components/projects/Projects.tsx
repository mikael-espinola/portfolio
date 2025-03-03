"use client";

import React, { useEffect, useState } from "react";
import { Container, List, Loader, Title } from "./style";
import ProjectCard from "../projectCard/ProjectCard";
import { useRefContext } from "@/contextApi/RefComponentsContext";
import { useLangContext } from "@/contextApi/LangProvider";

export interface Data {
  id: number;
  name: string;
  html_url: string;
  homepage: string;
  description_EN: string;
  description_PT: string;
  techs: string[];
  image: string;
}

export interface FetchProp {
  repositories: Data[];
  error?: string;
}

const Projects = () => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { projectsRef } = useRefContext();
  const { lang } = useLangContext();

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/repositories");
      const data = await response.json();
      setRepositories(data);
      setIsLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Title ref={projectsRef}>{lang === "en" ? "Projects" : "Projetos"}</Title>
      <Container $isLoading={isLoading}>
        <List>
          {isLoading ? (
            <Loader />
          ) : (
            repositories &&
            repositories.map((repo, index) => (
              <ProjectCard lang={lang} data={repo} key={index} />
            ))
          )}
        </List>
      </Container>
    </>
  );
};

export default Projects;
