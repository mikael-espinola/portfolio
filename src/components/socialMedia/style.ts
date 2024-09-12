'use client'


import Link from "next/link"
import styled from "styled-components"
type Props = {
    $type: string
 }

export const Container = styled.nav`
    display: flex;
    gap: 1rem;
    justify-content: space-evenly;
    width: 100%;
`

export const SocialMediaLink = styled(Link)<Props>`
   svg {
      color: ${({$type}) => $type === "whatsapp" ? 'green' : $type === "linkedin" ? "blue" : $type === "github" ? "white" : $type === "gmail" && "red" };
      font-size: 24px;
   }
`