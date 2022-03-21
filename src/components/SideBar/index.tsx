import React, {FC} from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles";

type ComponentProps = {
    breadcrumbText: string
}

const SideBar: FC<ComponentProps> = ({ breadcrumbText = 'Patients' }) => {
    return (
        <Wrapper>
            <div className="grid-item">
                <h4><Link to={'/'} >Medical Test</Link></h4>
            </div>
            <div className="grid-item">
                <div className="breadcrumb">{breadcrumbText}</div>
            </div>
        </Wrapper>
    );
}

export default SideBar;