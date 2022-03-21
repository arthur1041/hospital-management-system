import React, { FC } from "react";
import AppointmentDetails from "../AppointmentDetails";
import AppointmentRow from "../AppointmentRow";
import { Wrapper } from "./styles";

type ComponentProps = {
    appointments: any[]
}

export const PatientAppointments: FC<ComponentProps > = ({ children, appointments }) => {
    
    // const [showThisWeek]
    
    return (
        <Wrapper>
            <div className="tabs">
                <div className="tab active" >This Week</div>
                <div className="tab">Upcoming</div>
                <div className="tab">History</div>
            </div>
            <div className="appointments-list this-week">
                <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
            </div>
            <div className="appointments-list upcoming">
                <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
            </div>
            <div className="appointments-list history">
                <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
            </div>
            <div className="appointment-details">
                <AppointmentDetails description="a" notes="a" specialty="a" round="bottom" mt={false} />
            </div>
        </Wrapper>
    );
}