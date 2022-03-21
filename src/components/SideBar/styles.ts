import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    width: 100%;
    padding: 40px 10px 40px 10px;
    height: 100vh;

    h4 {
        text-align: center;
    }

    .breadcrumb {
        width: 100%;
        max-width: 220px;
        border: 1px solid ${({theme}) => theme.colors.gray};
        border-radius: 10px;
        margin: 0 auto;
        position: relative;
        padding: 5px 10px 5px 10px;
        margin-top: 20px;
        text-transform: capitalize;
    }

    .breadcrumb::after {
        content: '>';
        right: 7px;
        position: absolute;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        display: grid;
        grid-template-columns: 20% calc(80% - 30px);
        padding: 10px 20px 10px 20px;
        gap: 30px;
        height: initial;

        h4 {
            text-align: left;
        }

        .grid-item:first-child {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .breadcrumb {
            margin-top: 0;
            max-width: none;
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){

    }
`;