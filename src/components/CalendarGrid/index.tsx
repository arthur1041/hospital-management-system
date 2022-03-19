import React, { FC } from "react";
import { Wrapper } from "./styles";
import { getCalendarStructure, HourAndMinutes, week } from "../../util/calendar-util";


export const CalendarGrid: FC = () => {

    const calendarStructure: Map<number, HourAndMinutes[]> = getCalendarStructure();

    return (
        <Wrapper>
            <div>
                <div className="corner">aqui</div>
                {calendarStructure.get(week.MONDAY)?.map(({ hour, minute }) => {
                    return <div>{hour}:{minute === 0 ? '00' : minute}</div>
                })}
            </div>
            {Array.from(calendarStructure).map(([key, value]) => {
                return (
                    <div>
                        <div className="day-of-the-week">{key}</div>
                        {value.map(({ hour, minute }) => {
                            // return <div>{hour}:{minute === 0 ? '00' : minute}</div>
                            return <div className="grid-item calendar-item" ></div>
                        })}
                    </div>
                )
            })}
        </Wrapper>
    );
}