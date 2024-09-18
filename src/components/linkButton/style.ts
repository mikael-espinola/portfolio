'use client'

import Link from "next/link"
import styled from "styled-components"

interface prop {
        text: string | undefined
}

const buttonDecoration = () => {
        return (
               ` &::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0;
                        height: 2px;
                        background-color: #ffaa00;
                        animation: ExpandWidth .2s forwards;
                }`
        )
}

export const Container = styled(Link)<prop>`
        text-decoration: none;
        color: #fff;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: .25rem;
        position: relative;
        font-size: 14px;

        a {
                text-decoration: none;
        }

        ${({text}) => text !== undefined && buttonDecoration()}

        &:hover{
                &::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0;
                        height: 2px;
                        background-color: #ffaa00;
                        animation: ExpandWidth .2s forwards;
                }

        }

        @keyframes ExpandWidth {
    from {
      width: 0%; /* Início da animação */
    }
    to {
      width: 100%; /* Final da animação */
    }
  }

   
`
export const Title = styled.h4`
        font-size: 24px;
        font-weight: 400;
`