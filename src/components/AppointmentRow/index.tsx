import React, { FC } from "react";
import { Wrapper } from "./styles";
import { FaBriefcaseMedical,FaStethoscope } from 'react-icons/fa'; //firs visit
import { IoMdPulse } from 'react-icons/io'; //exam
import { GiDrippingKnife, GiNotebook } from 'react-icons/gi' //checkup //surgery //followup
import { formatAppointmentDates } from "../../helpers/helper-functions";

type ComponentProps = {
    appointment: any
}

const getAppointmentTypeIcon = (appointmentType: string) =>{
    switch (appointmentType) {
        case 'firstVisit':
            return <FaBriefcaseMedical />
        case 'followUp':
            return <GiNotebook/>
        case 'checkUp':
            return <FaStethoscope/>
        case 'exam':
            return <IoMdPulse/>
        case 'surgery':
            return <GiDrippingKnife/>
    }
    return null;
}

const AppointmentRow: FC<ComponentProps> = ({ appointment }) => {
    return (
        <Wrapper>
            <div className="grid-item icon">{getAppointmentTypeIcon(appointment.type)}</div>
            <div className="grid-item date">{formatAppointmentDates(appointment)}</div>
            <div className="grid-item appointment-type">
                <span className="name">{appointment.type}</span>
            </div>
            <div className={"grid-item status " + appointment.status + "_styling"}><span>{appointment.status}</span></div>
        </Wrapper>
    );
}



export default AppointmentRow;