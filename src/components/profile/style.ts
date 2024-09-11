'use client'

import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .image {
        padding: 1rem;
        img {
            width: 15rem;
            height: 15rem;
            border-radius: 50%;
        }
    }

    .conections {
        display: flex;
        width: 70%;
        justify-content: space-evenly;
        padding: 0.5rem;
        font-size: 12px;
    }
`