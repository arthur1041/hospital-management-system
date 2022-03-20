import React, { FC } from "react";
import { CalendarGrid } from "../CalendarGrid";
import { Wrapper } from "./styles";

type ComponentProps = {
    appointments: any[],
    patients: any[],
}

const Calendar: FC<ComponentProps> = ({appointments, patients}) => {
    return (
        <Wrapper>
            <div className="calendar-header">
                <h3>Calendar</h3>
            </div>
            <div className="grid-container">
                <CalendarGrid appointments={appointments} patients={patients} />
            </div>
        </Wrapper>
    );
}

export default Calendar;