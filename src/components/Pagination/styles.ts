import styled from "styled-components";

export const Wrapper = styled.div`
    .pagination {
        display: flex;
        margin-top: 5px;
        .page-item {
            padding: 10px;
            border: 1px solid ${({theme}) => theme.colors.gray};
            border-radius: 5px;
            margin-right: 2px;
            font-weight: bold;
            cursor: pointer;

            &.active {
                background-color: ${({theme}) => theme.colors.primaryColor};
                border: none;
                span {
                    color: ${({theme}) => theme.colors.white};;
                }
            }
        }
    }
`;