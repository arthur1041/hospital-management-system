import React, { FC } from "react";
import Calendar from "../Calendar";
import History from "../History";
import HistoryRow from "../HistoryRow";
import { Wrapper } from "./styles"

const Dashboard: FC = () => {
    return (
        <Wrapper>
            <div className="dashboard-header">
                <h4>Dashboard</h4>
            </div>
            <Calendar />
            <History>
                <HistoryRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                <HistoryRow date="04/19/2021 12:00" status="cancelled" name="John Doe" appointmentType="firstVisit" />
                <HistoryRow date="04/19/2021 12:00" status="absent" name="John Doe" appointmentType="firstVisit" />
            </History>
        </Wrapper>
    );
}

export default Dashboard;