import React, {FC} from "react";
import Dashboard from "../Dashboard";
import SideBar from "../SideBar";
import { Wrapper } from "./styles"

const HomeGrid: FC = () => {
    return (
        <Wrapper>
            <div className="grid-item">
                <SideBar buttonText="click me" />
            </div>
            <div className="grid-item">
                <Dashboard/>
            </div>
        </Wrapper>
    );
}

export default HomeGrid;