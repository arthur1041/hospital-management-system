import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    padding: 30px;

    .registries-container {
        width: 100%;
        border: 1px solid ${({ theme }) => theme.colors.gray};
        margin-top: 25px;
        border-radius: 10px;
        padding-left: 10px;
        padding-right: 10px;


        .link {
            display: block;
            border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
            cursor: pointer;
        }

        .link:last-child {
            border-bottom: none;
        }
    }
`;