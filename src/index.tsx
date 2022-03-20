import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global-styles';
import { theme } from './styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Patient from './pages/Patient';

ReactDOM.render(
  <StrictMode>
    <Router>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/patient/:patientId' element={<Patient/>} />
            </Routes>
        </ThemeProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
