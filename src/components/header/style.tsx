"use client";

import { screen } from "@/style/breakpoints";
import styled from "styled-components";

interface IProps {
  $isRepoPage?: boolean;
}

export const Container = styled.div<IProps>`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  position: fixed;
  top: 0;
  width: 100%;
  background: rgb(13, 12, 12);
  background: linear-gradient(
    38deg,
    rgba(13, 12, 12, 1) 0%,
    rgba(0, 0, 0, 0.3833705357142857) 100%
  );
  backdrop-filter: blur(4px);
  font-size: 12px;
  z-index: 1;

  @media ${screen.small} {
    padding: 0;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }

  nav {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const LinkBox = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
  position: relative;
  background: none;
  border: none;

  &:hover {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #ffaa00;
      animation: ExpandWidth 0.2s forwards;
    }
  }

  @keyframes ExpandWidth {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;

export const Link = styled(Button).attrs({ as: "a" })`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  svg {
    font-size: 20px;
  }
`;
