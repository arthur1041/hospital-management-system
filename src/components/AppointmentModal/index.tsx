import React, { FC } from "react";
import { Wrapper } from "./styles";

type ComponentProps = {
    appointmentId: number
}

const AppointmentModal: FC<ComponentProps> = ({ appointmentId }) => {
    return (
        <Wrapper>
            modaaaaaaaaal {appointmentId}

        </Wrapper>
    );
}

export default AppointmentModal;