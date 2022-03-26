import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import AppointmentDetails from ".";
import { theme } from "../../styles/theme";

it('renders without crashing', ()=>{
    const div = document.createElement("div");
    if(theme){
        ReactDOM.render(<ThemeProvider theme={theme} ><AppointmentDetails description="test" notes="test" specialty="test" /></ThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    }
});