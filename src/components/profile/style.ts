'use client'

import Image from "next/image"
import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   
`

export const Box = styled.div`
    padding: 1rem;
`

export const ImageBox = styled(Image)`
     width: 15rem;
            height: 15rem;
            border-radius: 50%;
`

export const ConnectionsBox = styled.div`
    display: flex;
        width: 70%;
        justify-content: space-evenly;
        padding: 0.5rem;
        font-size: 12px;
`