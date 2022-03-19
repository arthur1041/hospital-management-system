import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global-styles';
import { theme } from './styles/theme';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Home />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
