'use client'

import styled from "styled-components"

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    padding: 1.6rem;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    cursor: pointer;
    border: none;
    font-size: 14px;

    &:hover {
        background-color: yellow;
    }
    
`