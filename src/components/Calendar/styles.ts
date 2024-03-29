import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 20px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 10px;
    padding: 30px;

    .grid-container {
        width: 100%;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        .grid-container {
            overflow-x: scroll;
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        padding: 10px;
    }
`;