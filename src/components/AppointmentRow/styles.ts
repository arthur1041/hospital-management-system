import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr 10fr 10fr;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;

    .grid-item{
        display: flex;
        justify-content: center;
        align-items: center;
        
        &.icon{    
            justify-content: left;
        }

        &.status span {
            color: ${({ theme }) => theme.colors.white};
            padding: 5px;
            border-radius: 5px;
        }

        &.appointment-type span.icon {
            margin-right: 5px;
        }

        &.status.completed_styling span {
            background-color: ${({ theme }) => theme.colors.secondaryColor};
        }

        &.status.cancelled_styling span {
            background-color: ${({ theme }) => theme.colors.infoColor};
        }

        &.status.absent_styling span{
            background-color: ${({ theme }) => theme.colors.dangerColor};
        }

        &.status.pending_styling span{
            background-color: ${({ theme }) => theme.colors.warningColor};
        }
    }

    &:last-child {
        border-bottom: none;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}){

    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        grid-template-columns: 1fr 1fr;

        .grid-item{
            &.status, &.appointment-type{
                display: none;
            } 
        }
    }
`;