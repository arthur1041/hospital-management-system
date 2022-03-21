
import React, { FC } from "react";
import { Wrapper } from "./styles";

type ComponentProps = {
    round?: string,
    mt?: boolean,
    specialty: string,
    description: string,
    notes: string,
}

const AppointmentDetails: FC<ComponentProps> = ({ round, mt, specialty, description, notes }) => {
    return (
        <Wrapper round={round} mt={mt}>
            <h5>Appointment Details</h5>
            <h3 className="header-desc"><span>{specialty}</span> says</h3>
            <div className="description"><span>{description}</span></div>
            {
                notes && notes.length > 0 ? <>
                    <h3 className="header-notes">Notes</h3>
                    <div className="description notes"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eligendi quia explicabo natus minima vitae voluptatibus sit voluptates eum veniam.</span></div>
                </>
                : ''
            }

        </Wrapper>
    );
}

export default AppointmentDetails;