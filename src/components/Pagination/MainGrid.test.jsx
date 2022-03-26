import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import Pagination from ".";
import { theme } from "../../styles/theme";

it('renders without crashing', async () => {
    const div = document.createElement("div");
    if (theme) {
        ReactDOM.render(<ThemeProvider theme={theme}><Pagination elementsPerPage={1} paginate={()=>{}} totalElements={2} /></ThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    }
});