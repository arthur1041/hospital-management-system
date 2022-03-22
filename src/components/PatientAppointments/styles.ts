import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 40px;

    .appointments-list:not(.show) {
        display: none;
    }

    .appointment-details:not(.show) {
        display: none;
    }

    .tabs {
        display: flex;
        .tab {
            padding: 15px;
            margin-right: 10px;
            border-radius: 10px 10px 0 0;
            background-color: ${({ theme }) => theme.colors.secondaryContrastiveWhite};
        }

        .tab.active {
            background-color: ${({ theme }) => theme.colors.white};
        }

        .tab:not(.active) {
            cursor: pointer;
        }
    }
    
    .lists-container {
        padding: 20px;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 0px 10px 10px 10px;
    }

    .appointments-list {
        background-color: ${({ theme }) => theme.colors.white};
    }

    .appointment-details {
        margin-top: 15px;
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
