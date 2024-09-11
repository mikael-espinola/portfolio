'use client'

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
    position: fixed;
    top: 0;
    width: 100%;
    background: rgb(13,12,12);
background: linear-gradient(38deg, rgba(13,12,12,1) 0%, rgba(0,0,0,0.3833705357142857) 100%);
    backdrop-filter: blur(4px);
    font-size: 12px;

    @media (max-width: 580px  ) {
        padding: 0;
        flex-direction: column;
    
    }



    a {
            text-decoration: none;
            color: #fff;
            cursor: pointer;

    }

    nav {
        display: flex;
        justify-content: space-evenly;
    }
        
`


export const LinkBox = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

`