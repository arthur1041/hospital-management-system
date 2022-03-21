import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;

    .grid-item{
        display: flex;

        &.status, &.name{    
            justify-content: center;
            align-items: center;

        }

        &.status span {
            color: ${({ theme }) => theme.colors.white};
            padding: 5px;
            border-radius: 5px;
        }

        &.plan {
            justify-content: right;
        }

        &.plan span {
            width: 149px;
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

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        grid-template-columns: 1fr 1fr;

        .grid-item{
           &.plan{
                display: none;
            } 
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
       
    }
`;