import React, { FC } from "react";
import Calendar from "../Calendar";
import { Wrapper } from "./styles"

const Dashboard: FC = () => {
    return (
        <Wrapper>
        <div className="dashboard-header">
            <h4>Dashboard</h4>
        </div>
        <Calendar/>
        </Wrapper>
    );
}

export default Dashboard;