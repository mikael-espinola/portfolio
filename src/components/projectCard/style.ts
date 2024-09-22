'use client'

import Image from "next/image"
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

    @media (min-width: 700px) {
        width: 15rem;
    }
`

export const Description = styled.div`
    padding: .6rem 0 0 .2rem;
`

export const Paragraph = styled.p`
    font-size: 14px;
    cursor: default;
`

export const ImageBox = styled.div`
    width: 100%;
    height: 8rem;
`

export const ImageItem = styled(Image)`
    width: 100%;
            height: 100%;
            object-fit: cover;
`

export const InfoBox = styled.div`
    display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: .6rem;
`

export const Text = styled.h3`
    text-transform: capitalize;
    cursor: default;
`