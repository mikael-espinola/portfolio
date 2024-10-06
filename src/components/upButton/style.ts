'use client'
import styled from "styled-components";
type Prop = {
    $show: boolean
}
export const Container = styled.button<Prop>`
    position: fixed;
    visibility: ${({$show}) => $show === true ? "hidden" : "visible"};
    bottom: .5rem;
    right: 0 ;
    right: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: 5rem;
    outline: none;

    @media (min-width: 970px) {
        right: 4rem;
    }

    &:active {
        @media (min-width: 768px) {
            outline: 1px solid #fff;

        }
    }
    svg {
        font-size: 48px;
        color: #fff;
    }
`