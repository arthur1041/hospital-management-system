import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { Spinner } from "./styles";

it('renders without crashing', async () => {
    const div = document.createElement("div");
    if (theme) {
        ReactDOM.render(<ThemeProvider theme={theme}><Spinner/></ThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    }
});