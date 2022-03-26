import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import PatientRow from ".";
import { theme } from "../../styles/theme";

it('renders without crashing', async () => {
    const div = document.createElement("div");
    if (theme) {
        ReactDOM.render(<ThemeProvider theme={theme}><PatientRow document="00000" name="test" plan="test" /></ThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    }
});