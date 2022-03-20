import React, { FC } from "react";
import { Wrapper } from "./styles";

const AppointmentStatus: FC = () => {
    return (
        <Wrapper>
            <div className="status-container">
                <div><h4>Appointment status</h4></div>
                <div className="list">
                    <div className="status pending"><span></span> - Pending</div>
                    <div className="status completed"><span></span> - Completed</div>
                    <div className="status cancelled"><span></span> - Cancelled</div>
                    <div className="status absent"><span></span> - Absent</div>
                </div>
            </div>
        </Wrapper>
    );
} 

export default AppointmentStatus;