import React, { FC } from "react";
import Calendar from "../Calendar";
import History from "../History";
import { Wrapper } from "./styles"

const Dashboard: FC = () => {
    return (
        <Wrapper>
        <div className="dashboard-header">
            <h4>Dashboard</h4>
        </div>
        <Calendar/>
        <History><div>abc</div><div>abc</div><div>abc</div></History>
        </Wrapper>
    );
}

export default Dashboard;