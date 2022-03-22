import styled from "styled-components";

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
        min-width: 400px;
        max-width: 800px;
        height: 500px;
        box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
        background-color: ${({ theme }) => theme.colors.white};
        position: relative;
        z-index: 10;
        border-radius: 10px;
        padding: 25px;

        .modal-content {
            .details {
                margin-top: 20px;
                display: grid;
            }
        }

        .infoset.m {
            margin-top: 10px;
        }

        .spinner-container {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .close-modal-button {
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
        }
    }


`;