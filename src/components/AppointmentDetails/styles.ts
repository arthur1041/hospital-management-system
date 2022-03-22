import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ round?: string, mt?: boolean, noPadding?: boolean }>`
   
    ${({noPadding}) => {
        if(!noPadding){
            return css`padding: 20px;`;
        }
    }}
   
     background-color: ${({ theme }) => theme.colors.white};
     
     ${({ mt }) => {
        if (mt)
            return css`margin-top: 30px;`;
    }};

     ${({ round }) => {
        if (round === 'bottom') {
            return css`border-radius: 0  0 10px 10px;`;
        }
        if (round === 'none') {
            return css`border-radius: initial`;
        }

        return css`border-radius: 10px`;
    }};

    .header-desc {
        span {
            text-transform: capitalize;
        }
    }

    .header-notes {
        margin-top: 15px;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}){
      
        ${({ mt }) => {
        if (mt)
            return css`margin-top: initial;`;
    }};
  
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
      
        .description {
            padding-left: initial;
        }
    
    }
`;