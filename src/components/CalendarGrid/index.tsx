import React, { FC } from "react";
import { Wrapper } from "./styles";
import { getCalendarStructure, HourAndMinutes, week, getWeekNameAbreviation } from "../../util/calendar-util";


export const CalendarGrid: FC = () => {

    const calendarStructure: Map<number, HourAndMinutes[]> = getCalendarStructure();

    return (
        <Wrapper>
            <div className="calendar-col col-hours">
                <div className="grid-col-item corner">{/*calendar corner*/}</div>
                {calendarStructure.get(week.MONDAY)?.map(({ hour, minute }) => {
                    return <div key={hour+minute} className={"grid-col-item time-of-the-day" + ((hour===9 && minute ===0) ? " no-margin-top" : "")} ><h5>{hour}:{minute === 0 ? '00' : minute}</h5></div>
                })}
            </div>
            {Array.from(calendarStructure).map(([key, value]) => {
                return (
                    <div key={key} className="calendar-col">
                        <div className="grid-col-item day-of-the-week"><h5>{getWeekNameAbreviation(key)}</h5></div>
                        {value.map(({ hour, minute }) => {
                            // return <div>{hour}:{minute === 0 ? '00' : minute}</div>
                            return <div key={hour+minute}
                                        className={"grid-col-item calendar-item" + ((hour===9 && minute ===0) ? " no-margin-top" : "")}></div>
                        })}
                    </div>
                )
            })}
        </Wrapper>
    );
}