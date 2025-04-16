"use client";

import React, { useEffect, useState } from "react";
import { Button, ButtonWrapper, Container, List, Loader, Title } from "./style";
import ProjectCard from "../projectCard/ProjectCard";
import { useRefContext } from "@/contextApi/RefComponentsContext";
import { useLangContext } from "@/contextApi/LangProvider";
import { useRouter } from "next/navigation";

export interface Data {
  id: number;
  name: string;
  html_url: string;
  homepage: string;
  description_EN: string;
  description_PT: string;
  techs: string[];
  image: string;
  type?: string;
}

export interface FetchProp {
  repositories: Data[];
  error?: string;
}

interface Props {
  threeFirst?: boolean;
}

const Projects = ({ threeFirst }: Props) => {
  const [repositories, setRepositories] = useState([]);
  const [threeFirstRepo, setThreeFirstRepo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { projectsRef } = useRefContext();
  const { lang } = useLangContext();
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/repositories");
      const data = await response.json();
      const firstThree = data.slice(0, 3);
      setRepositories(data);
      setThreeFirstRepo(firstThree);
      setIsLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Title ref={projectsRef}>{lang === "en" ? "Projects" : "Projetos"}</Title>
      {isLoading ? (
        <Loader />
      ) : threeFirst ? (
        <Container $isLoading={isLoading}>
          <List $home>
            {threeFirstRepo &&
              threeFirstRepo.map((repo, index) => (
                <ProjectCard lang={lang} data={repo} key={index} />
              ))}
          </List>
          {!isLoading && (
            <ButtonWrapper>
              <Button onClick={() => router.push("/repos/")}>
                {lang === "en" ? "See more" : "Ver mais"}
              </Button>
            </ButtonWrapper>
          )}
        </Container>
      ) : (
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
          <ButtonWrapper>
            <Button onClick={() => router.push("/")}>
              {lang === "en" ? "Back" : "Voltar"}
            </Button>
          </ButtonWrapper>
        </Container>
      )}
    </>
  );
};

export default Projects;
