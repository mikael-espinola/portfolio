"use client";

import React, { useState } from "react";

import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";

import {
  Container,
  ArrowButton,
  Item,
  List,
  Span,
  ContainerButton,
  ListPlus,
  IconContainer,
} from "./style";

const techs = () => {
  const [showList, setShowList] = useState(false);

  const handleButton = () => {
    setShowList((prev) => !prev);
  };
  return (
    <Container>
      <List>
        <Item>
          <IoLogoJavascript color="orange" />
          <Span>JavaScript</Span>
        </Item>
        <Item>
          <SiTypescript color="blue" />
          <Span>TypeScript</Span>
        </Item>
        <Item>
          <FaReact color="blue" />
          <Span>React</Span>
        </Item>
        <Item>
          <TbBrandNextjs color="#413f3f" />
          <Span>Next JS</Span>
        </Item>
        <Item>
          <SiRedux color="#7906bb" />
          <Span>Redux</Span>
        </Item>
        <Item>
          <FaGit color="#f6690a" />
          <Span>Git</Span>
        </Item>
      </List>
      <ListPlus $show_list={showList}>
        <Item>
          <SiStyledcomponents color="#c513e8" />
          <Span>Styled-Components</Span>
        </Item>
        <Item>
          <FaBootstrap color="#5025a0" />
          <Span>Bootstrap</Span>
        </Item>
        <Item>
          <RiTailwindCssFill color="#0856a3" />
          <Span>Tailwind</Span>
        </Item>
        <Item>
          <FaSass color="#f80bb5" />
          <Span>SASS</Span>
        </Item>
        <Item>
          <FaHtml5 color="#f6690a" title="HTML" />
          <Span>HTML</Span>
        </Item>
        <Item>
          <FaCss3Alt color="blue" />
          <Span>CSS</Span>
        </Item>
        <Item>
          <FaNodeJs color="#527016" />
          <Span>Node JS</Span>
        </Item>
        <Item>
          <SiPrisma color="#000000" />
          <Span>Prisma</Span>
        </Item>
        <Item>
          <SiMysql color="#ffcd57" />
          <Span>MySQL</Span>
        </Item>
        <Item>
          <DiMongodb color="green" />
          <Span>MongoDB</Span>
        </Item>
      </ListPlus>
      <ContainerButton>
        <ArrowButton onClick={handleButton}>
          {showList ? (
            <IconContainer>
              <IoIosArrowUp />
            </IconContainer>
          ) : (
            <IconContainer>
              <IoIosArrowDown />
            </IconContainer>
          )}
        </ArrowButton>
      </ContainerButton>
    </Container>
  );
};

export default techs;
