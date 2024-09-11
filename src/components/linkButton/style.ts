'use client'

import Link from "next/link"
import styled from "styled-components"

export const Container = styled(Link)`
        text-decoration: none;
        color: #fff;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: .25rem;
        position: relative;

        &:hover{
                &::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0;
                        height: 2px;
                        background-color: yellow;
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