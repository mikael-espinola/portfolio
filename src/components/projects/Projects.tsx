"use client";

import React, { useEffect, useState } from "react";
import { Container, Loader } from "./style";
import ProjectCard from "../projectCard/ProjectCard";

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
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/repositories");
      const data = await response.json();
      console.log(data);
      setRepositories(data);
      setIsLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        repositories && repositories.map((repo) => <ProjectCard data={repo} />)
      )}
    </Container>
  );
};

export default Projects;
