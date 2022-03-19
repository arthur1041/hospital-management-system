import React, { FC } from "react";
import { CalendarGrid } from "../CalendarGrid";
import { Wrapper } from "./styles";

const Calendar: FC = () => {
    return (
        <Wrapper>
            <div className="calendar-header">
                <h3>Calendar</h3>
            </div>
            <CalendarGrid/>
        </Wrapper>
    );
}

export default Calendar;