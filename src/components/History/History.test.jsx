import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Routes, MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import History from ".";
import API from "../../api/API";
import { convertDate } from "../../helpers/helper-functions";
import { theme } from "../../styles/theme";

it('renders without crashing', async () => {
    const div = document.createElement("div");
    if (theme) {
        const appointment = await API.fetchAppointment(1);
        const patient = await API.fetchPatient(1);
        appointment.startTime = convertDate(appointment.startTime);
        if (appointment.endTime) {
            appointment.endTime = convertDate(appointment.endTime);
        }

        ReactDOM.render(<ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={['/']} >
                <History appointments={[appointment]} patients={[patient]} />
            </MemoryRouter>
        </ThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    }
});