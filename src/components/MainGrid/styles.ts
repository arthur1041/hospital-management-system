import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        display: block;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){

    }
`;