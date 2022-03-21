import React, {FC} from "react";
import Dashboard from "../Dashboard";
import SideBar from "../SideBar";
import { Wrapper } from "./styles"

type ComponentProps = {
    breadcrumbText: string,
}

const MainGrid: FC<ComponentProps> = ({breadcrumbText, children}) => {
    return (
        <Wrapper>
            <div className="grid-item">
                <SideBar breadcrumbText={breadcrumbText} />
            </div>
            <div className="grid-item">
                <Dashboard>{children}</Dashboard>
            </div>
        </Wrapper>
    );
}

export default MainGrid;