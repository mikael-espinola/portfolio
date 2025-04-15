"use client";

import { screen } from "@/style/breakpoints";
import { FiLoader } from "react-icons/fi";
import styled, { keyframes } from "styled-components";

interface IProps {
  $isLoading?: boolean;
  $home?: boolean;
}

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  padding: 5rem 0 1rem;
  cursor: default;
`;

export const Container = styled.div<IProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 2rem;

  @media ${screen.medium} {
    justify-content: center;
    padding: 0 5rem;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled(FiLoader)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 24px;
  animation: ${rotate} 2s linear infinite;
  font-size: 48px;
`;

export const List = styled.ul<IProps>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  gap: 0.4rem;

  @media ${screen.small} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${screen.large} {
    grid-template-columns: ${(props) =>
      props.$home ? "repeat(3, 1fr)" : "repeat(4, 1fr)"};
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 0.435rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  justify-content: center;
  margin-top: 1.2rem;

  &:hover {
    background-color: #afafaf45;
    color: white;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  button {
    width: max-content;
  }
`;
