import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    
    .grid-item{
        display: flex;

        &.status, &.name{    
            justify-content: center;
            align-items: center;

        }

        &.date, &.appointment-type {
            align-items: center;
        }

        &.status span {
            color: ${({ theme }) => theme.colors.white};
            padding: 5px;
            border-radius: 5px;
        }

        &.appointment-type {
            display: flex;
            justify-content: right;
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
    }

    &:last-child {
        border-bottom: none;
    }
`;