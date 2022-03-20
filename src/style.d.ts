// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        font: {
            family: {
                default: string,
                secondary: string,
            }
        },
        colors: {
            primaryColor: string,
            secondaryColor: string,
            dangerColor: string,
            infoColor: string,
            warningColor: string,
            white: string,
            contrastiveWhite: string,
            secondaryContrastiveWhite: string,
            gray: string,
        },
        breakpoints: {
            mobile: string,
            tablet: string,
            desktop: string,
        }
    }
}