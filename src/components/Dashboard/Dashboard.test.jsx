import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Dashboard from ".";
import { theme } from "../../styles/theme";

it('renders without crashing', ()=>{
    const div = document.createElement("div");    
    if(theme){
        ReactDOM.render(<ThemeProvider theme={theme}><Dashboard/></ThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    }
});