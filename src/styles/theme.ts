import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
    font: {
        family: {
            default: "'Montserrat', sans-serif",
            secondary: "'Open Sans', sans-serif",
        }
    },
    colors: {
        primaryColor: '#3799FF',
        secondaryColor: '#46CE77',
        dangerColor: '#E1645B',
        infoColor: '#818181',
        warningColor: '#E4A44A',
        white: '#FFFFFF',
        contrastiveWhite: '#F7F8FC',
        secondaryContrastiveWhite: '#EAEBEF',
        gray: '#cccccc',
    },
    breakpoints: {
        mobile: '480px',
        tablet: '768px',
        desktop: '1024px',
    }
}