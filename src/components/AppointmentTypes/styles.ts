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

    .types {
        display: flex;
        align-items: center;
        font-size: 12px;
    }

    .types span {
        display: block;
        width: 30px;
        height: 30px;
        margin: 3px;
        border-radius: 50%;
        text-align: center;
    }
`;