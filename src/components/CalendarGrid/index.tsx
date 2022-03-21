import React, { FC } from "react";
import { Wrapper } from "./styles";
import { getCalendarStructure, HourAndMinutes, week, getWeekNameAbreviation } from "../../util/calendar-util";
import { getEntityById } from "../../helpers/helper-functions";
import { FaBriefcaseMedical, FaStethoscope } from 'react-icons/fa';
import { IoMdPulse } from 'react-icons/io';
import { GiDrippingKnife, GiNotebook } from 'react-icons/gi';
import { Link } from "react-router-dom";

type ComponentProps = {
    appointments: any[],
    patients: any[],
}

let exhibitedWeek = 7; //change here

function isDateInThisWeek(date: Date) {
    date = new Date(date);

    date.setHours(0)
    date.setMinutes(0);

    const todayObj = new Date();
    const todayDate = todayObj.getDate();
    const todayDay = todayObj.getDay();

    const firstDayOfWeek = new Date(todayObj.setDate(todayDate - (todayDay + 1 + exhibitedWeek)));

    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

    return date >= firstDayOfWeek && date <= lastDayOfWeek;
}

const getAppointmentByWeekAndTime = (weekDay: number, hour: number, minute: number, appointments: any[]) => {
    let appointment = null;
    appointments.forEach(el => {
        const appointmentDate: Date = new Date(el.startTime);
        if (isDateInThisWeek(appointmentDate) &&
            (appointmentDate.getDay() === weekDay && appointmentDate.getHours() === hour && appointmentDate.getMinutes() === minute)) {
            appointment = el;
        }
    });
    return appointment;
}

const getNumberOfCellsOccupied = (endDate: Date, startDate: Date) => {
    const milis: number = endDate.getTime() - startDate.getTime();
    const minutes: number = milis / (1000 * 60);

    return Math.trunc(minutes / 30);
}

export const CalendarGrid: FC<ComponentProps> = ({ appointments, patients }) => {

    const calendarStructure: Map<number, HourAndMinutes[]> = getCalendarStructure();
    return (
        <Wrapper>
            <div className="calendar-col col-hours">
                <div className="grid-col-item corner">{/*calendar corner*/}</div>
                {calendarStructure.get(week.MONDAY)?.map(({ hour, minute }) => {
                    return <div key={hour + minute} className={"grid-col-item time-of-the-day" + ((hour === 9 && minute === 0) ? " no-margin-top" : "")} ><h5>{hour}:{minute === 0 ? '00' : minute}</h5></div>
                })}
            </div>

            {Array.from(calendarStructure).map(([key, value]) => {
                let lastCellIsMergedBy: number = 0;
                return (
                    <div key={key} className="calendar-col">
                        <div className="grid-col-item day-of-the-week"><h5>{getWeekNameAbreviation(key)}</h5></div>
                        {value.map(({ hour, minute }) => {
                            const appointment: any = getAppointmentByWeekAndTime(key, hour, minute, appointments);

                            const patient: any = appointment !== null ? getEntityById(appointment.patientId, patients) : null;

                            let appointmentTypeIcon;

                            if (appointment != null) {
                                const iconsize: number = 15
                                switch (appointment.type) {
                                    case 'firstVisit':
                                        appointmentTypeIcon = <FaBriefcaseMedical size={iconsize} />
                                        break
                                    case 'followUp':
                                        appointmentTypeIcon = <GiNotebook size={iconsize} />;
                                        break;
                                    case 'checkUp':
                                        appointmentTypeIcon = <FaStethoscope size={iconsize} />;
                                        break;
                                    case 'exam':
                                        appointmentTypeIcon = <IoMdPulse size={iconsize} />;
                                        break;
                                    case 'surgery':
                                        appointmentTypeIcon = <GiDrippingKnife size={iconsize} />
                                }
                            }

                            const cellContent = appointment != null ? <div className="calendar-cell-content-wrapper">
                                <div className="patient-name">{patient !== null ? patient.name : ''}</div>
                                <div className="appointment-description">{appointment.description}</div>
                                <span className="type-icon">{appointmentTypeIcon}</span>
                            </div> : <></>;

                            const defaultCell = <div key={hour + minute}
                                className={"grid-col-item calendar-item" + ((hour === 9 && minute === 0) ? " no-margin-top" : "") + ((appointment !== null) ? " booked" : "") + (appointment !== null ? " " + appointment.status : '')}>
                                {cellContent}
                            </div>


                            if (appointment !== null && appointment.status === "completed") {
                                const numberOfCells = getNumberOfCellsOccupied(new Date(appointment.endTime), new Date(appointment.startTime));

                                if (numberOfCells >= 2) {
                                    lastCellIsMergedBy = numberOfCells - 1;
                                    return (
                                        <Link key={hour + minute} className="link" to={`/patient/${appointment.patientId}/appointment/${appointment.id}`}>
                                            <div
                                                className={"grid-col-item calendar-item merged merged-by-" + numberOfCells + ((hour === 9 && minute === 0) ? " no-margin-top" : "") + ((appointment != null) ? " booked" : "") + (appointment !== null ? " " + appointment.status : '')}>
                                                {cellContent}
                                            </div>
                                        </Link>
                                    )
                                } else {
                                    return defaultCell;
                                }

                            }

                            if (lastCellIsMergedBy === 0) {
                                if (appointment != null) {
                                    return (
                                        <Link key={hour + minute} className="link" to={`/patient/${appointment.patientId}/appointment/${appointment.id}`}>
                                            {defaultCell}
                                        </Link>
                                    );
                                }

                                return defaultCell;
                            }

                            lastCellIsMergedBy--;

                            return "";
                        })}
                    </div>
                )
            })}
        </Wrapper>
    );
}