import React, { FC } from "react";
import { Wrapper } from "./styles";
import { FaBriefcaseMedical,FaStethoscope } from 'react-icons/fa';
import { IoMdPulse } from 'react-icons/io';
import { GiDrippingKnife, GiNotebook } from 'react-icons/gi';

const AppointmentTypes: FC = () => {
    return (
        <Wrapper>
            <div className="types-container">
                <div><h4>Appointment types</h4></div>
                <div className="list">
                    <div className="types"><span><FaBriefcaseMedical size={25} /></span> - firstVisit</div>
                    <div className="types"><span><GiNotebook size={25} /></span> - followUp</div>
                    <div className="types"><span><FaStethoscope size={25} /></span> - checkUp</div>
                    <div className="types"><span><IoMdPulse size={25} /></span> - exam</div>
                    <div className="types"><span><GiDrippingKnife size={25} /></span> - surgery</div>
                </div>
            </div>
        </Wrapper>
    );
} 

export default AppointmentTypes;