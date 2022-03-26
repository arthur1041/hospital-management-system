import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import HistoryRow from ".";
import { theme } from "../../styles/theme";

it('renders without crashing', async () => {
    const div = document.createElement("div");
    if (theme) {
        ReactDOM.render(<ThemeProvider theme={theme}><HistoryRow appointmentType="followUp" date="2002-02-02" name="test" status="pending"/></ThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    }
});