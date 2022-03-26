import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import AppointmentModal from ".";
import { theme } from "../../styles/theme";

it('renders without crashing', ()=>{
    const div = document.createElement("div");
    if(theme){
        ReactDOM.render(<ThemeProvider theme={theme}><AppointmentModal appointmentId={1} setShowModal={()=>{}} showModal={true} /></ThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    }
});