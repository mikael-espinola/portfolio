'use client'

import styled from "styled-components"

export const Container = styled.button`
    text-transform: uppercase;
    padding: .3rem .3rem;
    margin-left: 1rem;
    border-radius: 50%;
    cursor: pointer;
    border: none;

    @media (max-width: 580px) {
        position: absolute;
        top: 90px;
        right: 10px;
        margin: 0;
    }
    
`