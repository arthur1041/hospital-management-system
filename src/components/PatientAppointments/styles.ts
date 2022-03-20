import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 40px;

    .tabs {
        display: flex;
        .tab {
            padding: 20px;
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
    
    .appointments-list, .appointment-details  {
        padding: 20px;
        background-color: ${({theme}) => theme.colors.white};
    }

    .appointments-list {
        border-radius: 0px 10px 0px 0px;
    }
    
    .appointment-details {
        border-radius: 0px 0px 10px 10px;
        h5 {
            padding-bottom: 15px;
        }
        h3 {
            padding-bottom: 10px;
        }
        div {
            padding-left: 30px;
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        .tabs {
            .tab {
                padding: 15px;
            }
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        .tabs {
            .tab {
                padding: 10px;
            }
        }

        .appointment-details {
            div {
                padding-left: initial;
            }
        }
    }
`;
