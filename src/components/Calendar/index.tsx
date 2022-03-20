import React, { FC } from "react";
import { CalendarGrid } from "../CalendarGrid";
import { Wrapper } from "./styles";

type ComponentProps = {
    appointments: object[]
}

const Calendar: FC<ComponentProps> = ({appointments}) => {
    return (
        <Wrapper>
            <div className="calendar-header">
                <h3>Calendar</h3>
            </div>
            <div className="grid-container">
                <CalendarGrid appointments={appointments} />
            </div>
        </Wrapper>
    );
}

export default Calendar;