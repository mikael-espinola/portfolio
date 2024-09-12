'use client'

import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 2px solid gray;
    padding: 0.3rem;
    border-radius: 0.5rem;
    transition: background-color .2s ease;

    &:hover {
        background-color: gray;
        color: black;
    }

    .image {
        width: 100%;
        height: 8rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: .6rem;

        > h3 {
            text-transform: capitalize;
            cursor: default;
        }
    }

    .description {
        padding: .6rem 0 0 .2rem;
        p {
            font-size: 12px;
            cursor: default;
        }
    }

    @media (min-width: 700px) {
        width: 15rem;
    }
`