import React, { FC } from "react";
import { Wrapper } from "./styles";
import { getCalendarStructure, HourAndMinutes, week, getWeekNameAbreviation } from "../../util/calendar-util";

type ComponentProps = {
    appointments: any[]
}

let exhibitedWeek = 6;

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

export const CalendarGrid: FC<ComponentProps> = ({ appointments }) => {

    const calendarStructure: Map<number, HourAndMinutes[]> = getCalendarStructure();
    return (
        <Wrapper>
            {/* {appointments.map((el) => {
                return <div key={el.id}>{el.id}</div>
            })} */}

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

                            const defaultCell = <div key={hour + minute}
                                className={"grid-col-item calendar-item" + ((hour === 9 && minute === 0) ? " no-margin-top" : "") + ((appointment != null) ? " booked" : "")}>
                                {appointment !== null ? appointment.id : ''}
                            </div>
                            
                            if (appointment !== null && appointment.status === "completed") {
                                const numberOfCells = getNumberOfCellsOccupied(new Date(appointment.endTime), new Date(appointment.startTime));

                                if (numberOfCells >= 2) {
                                    lastCellIsMergedBy = numberOfCells-1;
                                    return <div key={hour + minute}
                                        className={"grid-col-item calendar-item merged merged-by-"+numberOfCells + ((hour === 9 && minute === 0) ? " no-margin-top" : "") + ((appointment != null) ? " booked" : "")}>
                                        {appointment !== null ? appointment.id : ''}
                                    </div>
                                } else {
                                    return defaultCell;
                                }

                            }
                            console.log("lastcell", lastCellIsMergedBy);
                            if(lastCellIsMergedBy === 0)
                                return defaultCell;
                            
                            lastCellIsMergedBy--;

                            return "";
                        })}
                    </div>
                )
            })}
        </Wrapper>
    );
}