import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    top: 0;

    .modal-wrapper {
        min-width: 200px;
        max-width: 800px;
        min-height: 500px;
        max-height: 700px;
        box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
        background-color: ${({theme}) => theme.colors.white};
        position: relative;
        z-index: 10;
        border-radius: 10px;
        padding: 20px;
    }
`;