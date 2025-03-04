"use client";
import styled from "styled-components";
import techs from "../devInfo/technologies/techs";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #4502922d;
  padding: 0.4rem;
  border-radius: 4px;
  position: relative;
`;

export const CardTitle = styled.h4`
  line-height: 1.6rem;
  text-transform: capitalize;
  cursor: default;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 10rem;
  position: relative;
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 1.2rem;
  text-align: justify;
`;

export const TechsWrapper = styled.article`
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3rem;
  text-align: center;
  margin-top: 1rem;
`;

export const TechTitle = styled.h4``;

export const TechList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
export const TechItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  justify-content: space-evenly;
  position: absolute;
  margin-bottom: 0.5rem;
  bottom: 0;
`;
export const Link = styled.a`
  text-decoration: none;
  color: black;
  background-color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: #afafaf45;
    color: white;
  }
`;
