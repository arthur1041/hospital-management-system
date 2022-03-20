import React, { FC } from "react";
import { Wrapper } from "./styles";
import { FaBriefcaseMedical,FaStethoscope } from 'react-icons/fa'; //firs visit
import { IoMdPulse } from 'react-icons/io'; //exam
import { GiDrippingKnife, GiNotebook } from 'react-icons/gi' //checkup //surgery //followup

type ComponentProps = {
    date: string,
    status: string,
    name: string,
    appointmentType: string
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

const AppointmentRow: FC<ComponentProps> = ({ date, status, name, appointmentType }) => {
    return (
        <Wrapper>
            <div className="grid-item icon">{getAppointmentTypeIcon(appointmentType)}</div>
            <div className="grid-item date">{date}</div>
            <div className="grid-item appointment-type">
                <span className="name">{appointmentType}</span>
            </div>
            <div className={"grid-item status " + status + "_styling"}><span>{status}</span></div>
        </Wrapper>
    );
}



export default AppointmentRow;