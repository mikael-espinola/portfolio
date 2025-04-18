import React from "react";
import {
  Card,
  CardTitle,
  Description,
  ImageWrapper,
  Link,
  LinkWrapper,
  TechItem,
  TechList,
  TechsWrapper,
  TechTitle,
} from "./style";
import { Data } from "../projects/Projects";
import Image from "next/image";
import TagWrapper from "../tagWrapper/TagWrapper";

interface Props {
  data: Data;
  lang: string;
}

function formatList(items: string[]) {
  if (items.length === 1) {
    return items[0];
  } else if (items.length === 2) {
    return items.join(" e ");
  } else {
    const lastItem = items[items.length - 1];
    const remainingItems = items.slice(0, items.length - 1);
    return remainingItems.join(", ") + " e " + lastItem;
  }
}

const ProjectCard = ({ data, lang }: Props) => {
  return (
    <Card key={data.id} aria-label={data.name}>
      <ImageWrapper>
        <Image alt="" src={data.image} fill />
      </ImageWrapper>
      <CardTitle>{data.name}</CardTitle>
      <TagWrapper>
        {data.type === "professional" && lang === "en"
          ? "Professional Project"
          : data.type === "professional" && lang === "pt"
          ? "Projeto Profissional"
          : data.type === "personal" && lang === "en"
          ? "Personal Project"
          : data.type === "personal" && lang === "pt"
          ? "Projeto Pessoal"
          : ""}
      </TagWrapper>
      <Description>
        {lang === "en" ? data.description_EN : data.description_PT}
      </Description>
      <TechsWrapper>
        <TechTitle>Stacks:</TechTitle>
        <TechList>
          <TechItem>{formatList(data.techs)}</TechItem>
        </TechList>
      </TechsWrapper>
      <LinkWrapper>
        {data.homepage !== "" && (
          <Link rel="noopener noreferrer" target="_blank" href={data.homepage}>
            Deploy
          </Link>
        )}
        <Link rel="noopener noreferrer" target="_blank" href={data.html_url}>
          {data.type === "professional" && lang === "en"
            ? "Explore the official page"
            : data.type === "professional" && lang === "pt"
            ? "Explore a página oficial"
            : "GitHub"}
        </Link>
      </LinkWrapper>
    </Card>
  );
};

export default ProjectCard;
