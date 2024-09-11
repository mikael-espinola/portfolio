'use client'

import { FiLoader } from "react-icons/fi"
import styled, { keyframes } from "styled-components"

export const Container = styled.div`
    display: flex;
    padding: 0 5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled(FiLoader)`
 display: inline-block;
  font-size: 24px;
  animation: ${rotate} 2s linear infinite;  
  font-size: 48px;
 
`