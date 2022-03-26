import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import {  PatientAppointments } from ".";
import API from "../../api/API";
import { convertDate } from "../../helpers/helper-functions";
import { theme } from "../../styles/theme";

it('renders without crashing', async ()=>{
    const div = document.createElement("div");    
    if(theme){
        const appointment = await API.fetchAppointment(1);
        appointment.startTime = convertDate(appointment.startTime);
        if(appointment.endTime){
            appointment.endTime = convertDate(appointment.endTime);
        }

        ReactDOM.render(<ThemeProvider theme={theme}><PatientAppointments appointments={[appointment]} /></ThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    }
});