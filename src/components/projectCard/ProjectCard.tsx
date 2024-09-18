import React from "react";
import { Container } from "./style";
import Image from "next/image";
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
      <div className="image">
        <Image
          alt="project poster"
          width={1600}
          height={900}
          src={`${data.image}`}
        />
      </div>
      <div className="info">
        <h3>{data.name}</h3>
        <Link
          href={data.html_url}
          target="_blank "
          rel="noopener noreferrer"
          title="Repositório no gitHub"
          aria-label="Acesse o repositório no Github"
        >
          <VscLinkExternal color="#fff" />
        </Link>
      </div>
      <div className="description">
        {lang === "en" ? (
          <p>{data.description_EN}</p>
        ) : (
          <p>{data.description_PT}</p>
        )}
      </div>
    </Container>
  );
};

export default ProjectCard;
