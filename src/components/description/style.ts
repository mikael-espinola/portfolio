"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 15px;
  text-align: justify;
  line-height: 1.6;
`;

export const Span = styled.span`
  font-size: 40px;
`;

export const Title = styled.h4`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 40px;
  margin-top: 1.5rem;
`;

export const LangButtonBox = styled.div`
  display: flex;
  position: absolute;
  left: 2rem;
  top: 5.5;
`;
