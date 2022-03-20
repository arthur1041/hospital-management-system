import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 40px;
    max-width: 190px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    border-radius: 10px;

    .list {
        margin-top: 10px;
    }

    .status {
        display: flex;
        align-items: center;
        font-size: 12px;

        &.pending span {
            background-color: ${({ theme }) => theme.colors.warningColor};
        }

        &.completed span {
            background-color: ${({ theme }) => theme.colors.secondaryColor};
        }

        &.cancelled span {
            background-color: ${({ theme }) => theme.colors.infoColor};
        }

        &.absent span {
            background-color: ${({ theme }) => theme.colors.dangerColor};
        }
    }

    .status span {
        display: block;
        width: 30px;
        height: 30px;
        margin: 3px;
        border-radius: 50%;
    }
`;