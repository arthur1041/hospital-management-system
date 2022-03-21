import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 40px;

    .tabs {
        display: flex;
        .tab {
            padding: 15px;
            margin-right: 10px;
            border-radius: 10px 10px 0 0;
            background-color: ${({theme}) => theme.colors.secondaryContrastiveWhite};
        }

        .tab.active {
            background-color: ${({theme}) => theme.colors.white};
        }

        .tab:not(.active) {
            cursor: pointer;
        }
    }
    
    .appointments-list {
        padding: 20px;
        background-color: ${({theme}) => theme.colors.white};
    }

    .appointments-list {
        border-radius: 0px 10px 0px 0px;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        .tabs {
            .tab {
                padding: 10px;
            }
        }
    }
`;
