import React, {FC} from "react";
import { Wrapper } from "./styles";

type ComponentProps = {
    buttonText: string
}

const SideBar: FC<ComponentProps> = ({ buttonText }) => {
    return (
        <Wrapper>
            <div className="grid-item">
                <h4>Medical Test</h4>
            </div>
            <div className="grid-item">
                <div id="btn-change-page">{buttonText}</div>
            </div>
        </Wrapper>
    );
}

export default SideBar;