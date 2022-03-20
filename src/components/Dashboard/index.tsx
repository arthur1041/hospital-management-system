import React, { FC } from "react";
import Calendar from "../Calendar";
import History from "../History";
import HistoryRow from "../HistoryRow";
import { Wrapper } from "./styles"

const Dashboard: FC = ({children}) => {
    return (
        <Wrapper>
            <div className="dashboard-header">
                <h4>Dashboard</h4>
            </div>
           {children}
        </Wrapper>
    );
}

export default Dashboard;