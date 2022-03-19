import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.font.family.default};
    }

    body {
        background-color: ${({theme}) => theme.colors.contrastiveWhite};
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
`;