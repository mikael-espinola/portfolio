"use client";
import styled, { keyframes } from "styled-components";

type Props = {
  $show_list: boolean;
};

export const Container = styled.div`
  position: relative;
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3em;

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(6, 1fr);
    padding: 2.5em;
  }
`;

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 700px; 
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    max-height: 700px; 
    opacity: 1;
  }
  to {
      opacity: 0;
    max-height: 0;
  }
`;

export const ListPlus = styled.ul<Props>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3em;
  margin: 2em 0 1em 0;
  animation: ${(props) => (props.$show_list ? slideDown : slideUp)} 0.5s
    forwards;

  visibility: ${(props) => (props.$show_list ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.$show_list ? "auto" : "none")};

  @media screen and (min-width: 700px) {
    padding: 1em 2.5em;
    grid-template-columns: repeat(6, 1fr);
    margin-top: 0;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3em;

  @media screen and (min-width: 950px) {
    transform: scale(1);
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.2);
      transition: transform 0.1s;
    }
  }
`;
export const Span = styled.span`
  font-size: 11px;
  text-align: center;
  margin-top: 0.5em;
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ArrowButton = styled.button`
  width: 15em;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7em;
  font-size: 14px;
  border-radius: 10px;
`;
