import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainGrid from ".";
import { theme } from "../../styles/theme";

it('renders without crashing', async () => {
    const div = document.createElement("div");
    if (theme) {
        ReactDOM.render(<ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={['/']} >
                <MainGrid breadcrumbText="test" />
            </MemoryRouter>
            </ThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    }
});