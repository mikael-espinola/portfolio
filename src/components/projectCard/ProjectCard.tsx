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
    const lastItem = items.pop();
    return items.join(", ") + " e " + lastItem;
  }
}

const ProjectCard = ({ data, lang }: Props) => {
  return (
    <Card key={data.id}>
      <ImageWrapper>
        <Image
          alt=""
          src={data.image}
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
      </ImageWrapper>
      <CardTitle>{data.name}</CardTitle>
      <Description>
        {lang === "en" ? data.description_EN : data.description_PT}
      </Description>
      <TechsWrapper>
        <TechTitle>Stack</TechTitle>
        <TechList>
          <TechItem>{formatList(data.techs)}</TechItem>
        </TechList>
      </TechsWrapper>
      <LinkWrapper>
        <Link rel="noopener noreferrer" target="_blank" href={data.homepage}>
          Deploy
        </Link>
        <Link rel="noopener noreferrer" target="_blank" href={data.html_url}>
          GitHub
        </Link>
      </LinkWrapper>
    </Card>
  );
};

export default ProjectCard;
