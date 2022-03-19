import styled from "styled-components";

export const Wrapper = styled.div`
    
    padding: 40px;
    

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        .dashboard-header {
            h4 {
                display: none;
            }
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        padding: 10px;
    }
`;
