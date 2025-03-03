import React from "react";
import {
  Description,
  Card,
  Techs,
  TechsContainer,
  DescriptionContainer,
  Button,
  LinkContainer,
  Flip,
  FaceCard,
  BackCard,
  CardTitleContainer,
  CardTitle,
  TechTitle,
} from "./style";
import { Data } from "../projects/Projects";

interface Props {
  data: Data;
  lang: string;
}

const ProjectCard = ({ data, lang }: Props) => {
  return (
    <Card key={data.id}>
      <Flip>
        <FaceCard $image_url={`${data.image}`}>
          <CardTitleContainer>
            <CardTitle>{data.name}</CardTitle>
          </CardTitleContainer>
        </FaceCard>
        <BackCard>
          <DescriptionContainer>
            <Description>
              {lang === "EN" ? data.description_EN : data.description_PT}
            </Description>
          </DescriptionContainer>
          <LinkContainer>
            <Button
              href={data.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy
            </Button>
            <Button
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Button>
          </LinkContainer>
          <TechsContainer>
            <TechTitle>Techs: </TechTitle>
            {data.techs.map((tech, index) => (
              <Techs key={index} color="">
                {tech}
              </Techs>
            ))}
          </TechsContainer>
        </BackCard>
      </Flip>
    </Card>
  );
};

export default ProjectCard;
