import React from "react";
import { Wrapper } from "./styles";

type ComponentProps = {
    buttonText: string
}

const SideBar = ({ buttonText }: ComponentProps) => {
    return (
        <Wrapper>
            <h4>Medical Test</h4>
            <div id="btn-change-page">{buttonText}</div>
        </Wrapper>
    );
}

export default SideBar;