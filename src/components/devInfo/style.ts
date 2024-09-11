'use client'

import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 5rem;
    flex-direction: row;
    margin: 5rem 0 12rem;

    @media (max-width: 580px  ) {
        flex-direction: column-reverse;
        padding: 0 1.5rem;
    }
   

`

export const Saudation = styled.span`
font-size: 40px;
display: flex;
    align-items: center;
   

    @media (max-width: 580px) {
        font-size: 25px;
    }
`

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
     width: 40%;
     text-align: center;
    

     @media (max-width: 580px) {
        width: 100%;
    }
`
export const Apresentation = styled.div`
     width: 60%;
     padding: 0.5rem;
    
     
    @media (max-width: 580px) {
        width: 100%;
    }
`
