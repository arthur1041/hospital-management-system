import React, {FC} from "react";
import { Wrapper } from "./styles";

type ComponentProps = {
    breadcrumbText: string
}

const SideBar: FC<ComponentProps> = ({ breadcrumbText }) => {
    return (
        <Wrapper>
            <div className="grid-item">
                <h4>Medical Test</h4>
            </div>
            <div className="grid-item">
                <div className="breadcrumb">{breadcrumbText}</div>
            </div>
        </Wrapper>
    );
}

export default SideBar;