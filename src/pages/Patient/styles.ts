import styled from "styled-components";

export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        grid-template-columns: 1fr 1fr;

        .grid-item:first-child {
            grid-column-start: 1;
            grid-column-end: 3;
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        grid-template-columns: 1fr;

        .grid-item:first-child {
            grid-column-start: initial;
            grid-column-end: initial;
        }
    }
`;