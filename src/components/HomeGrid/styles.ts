import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 20% calc(80% - 25px);
    gap: 25px;

    .grid-item.a {
        height: 100vh;
        background: red;
    }

    .grid-item.b {
        height: 100vh;
        background: blue;
    }
`;