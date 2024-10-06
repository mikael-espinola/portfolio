'use client'

import { FiLoader } from "react-icons/fi"
import styled, { keyframes } from "styled-components"

interface props {
  isLoading: boolean
}

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  padding: 5rem 0 1rem ;
  cursor: default;

`

export const Container = styled.div<props>`
    display: flex;
    justify-content: ${({isLoading}) => isLoading ? 'center' : 'none'};
    width: 100%;
    padding: 0 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;

    @media (min-width: 700px) {
      justify-content: center;
      padding: 0 5rem;
    }

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

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 2em;
  justify-content: center;
`