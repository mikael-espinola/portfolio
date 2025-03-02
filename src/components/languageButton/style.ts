"use client";

import styled from "styled-components";
import { Button } from "../header/style";

export const Container = styled.button`
  background: none;
  border: none;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  padding: 0.5rem;
  cursor: pointer;

  &:active {
    border-color: #ffaa00;
  }
`;
