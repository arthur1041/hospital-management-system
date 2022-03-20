import React, { FC } from "react";
import { Wrapper } from "./styles";

export const PatientAppointments: FC = ({children}) => {
    return (
        <Wrapper>
            <div className="tabs">
                <div className="tab active" >Today</div>
                <div className="tab">Upcoming</div>
                <div className="tab">History</div>
            </div>
            <div className="appointments-list">
                {children}
            </div>
            <div className="appointment-details">
                <h5>Appointment Details</h5>
                <h3>Neurology says</h3>
                <div><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eligendi quia explicabo natus minima vitae voluptatibus sit voluptates eum veniam.</span></div>
            </div>
        </Wrapper>
    );
}