import React, { FC } from "react";
import { Wrapper } from "./styles";
import { getCalendarStructure, HourAndMinutes, week, getWeekNameAbreviation } from "../../util/calendar-util";

type ComponentProps = {
    appointments: any[]
}

function isDateInThisWeek(date: Date) {
    date = new Date(date);

    date.setHours(0)
    date.setMinutes(0);

    const todayObj = new Date();
    const todayDate = todayObj.getDate();
    const todayDay = todayObj.getDay();

    const firstDayOfWeek = new Date(todayObj.setDate(todayDate - (todayDay + 1 + 6)));

    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

    return date >= firstDayOfWeek && date <= lastDayOfWeek;
}

const getAppointmentByWeekAndTime = (weekDay: number, hour: number, minute: number, appointments: any[]) => {
    let appointment = null;
    appointments.forEach(el => {
        const appointmentDate: Date = new Date(el.startTime.replace("Z", ""));
        if (isDateInThisWeek(appointmentDate) &&
            (appointmentDate.getDay() === weekDay && appointmentDate.getHours() === hour && appointmentDate.getMinutes() === minute)) {
            appointment = el;
        }
    });
    return appointment;
}

const getAppointmentByWeekAndTimeTest = (appointments: any[]) => {

    appointments.forEach(el => {
        const appointmentDate: Date = new Date(el.startTime.replace("Z", ""));
        if (isDateInThisWeek(appointmentDate)) {
            console.log(appointmentDate);
        }
    });

}

export const CalendarGrid: FC<ComponentProps> = ({ appointments }) => {

    const calendarStructure: Map<number, HourAndMinutes[]> = getCalendarStructure();
    getAppointmentByWeekAndTimeTest(appointments);
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
                return (
                    <div key={key} className="calendar-col">
                        <div className="grid-col-item day-of-the-week"><h5>{getWeekNameAbreviation(key)}</h5></div>
                        {value.map(({ hour, minute }) => {
                            const appointment: any = getAppointmentByWeekAndTime(key, hour, minute, appointments);
                            // return <div>{hour}:{minute === 0 ? '00' : minute}</div>
                            return <div key={hour + minute}
                                className={"grid-col-item calendar-item" + ((hour === 9 && minute === 0) ? " no-margin-top" : "") + ((appointment != null ) ? " booked" : "")}>
                                    {appointment !== null ? appointment.id : ''}
                                </div>
                        })}
                    </div>
                )
            })}
        </Wrapper>
    );
}