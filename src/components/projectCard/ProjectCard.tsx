import React from "react";
import {
  Container,
  Description,
  ImageBox,
  ImageItem,
  InfoBox,
  Paragraph,
} from "./style";
import { Data } from "../projects/Projects";
import Link from "next/link";

import { VscLinkExternal } from "react-icons/vsc";

interface Props {
  data: Data;
  lang: string;
}

const ProjectCard = ({ data, lang }: Props) => {
  return (
    <Container>
      <ImageBox className="image">
        <ImageItem
          alt="project poster"
          width={1600}
          height={900}
          src={`${data.image}`}
        />
      </ImageBox>
      <InfoBox>
        <Paragraph>{data.name}</Paragraph>
        <Link
          href={data.html_url}
          target="_blank "
          rel="noopener noreferrer"
          title="Repositório no gitHub"
          aria-label="Acesse o repositório no Github"
        >
          <VscLinkExternal color="#fff" />
        </Link>
      </InfoBox>
      <Description>
        {lang === "en" ? (
          <p>{data.description_EN}</p>
        ) : (
          <p>{data.description_PT}</p>
        )}
      </Description>
    </Container>
  );
};

export default ProjectCard;
