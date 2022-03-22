import React, { FC } from "react";
import { Wrapper } from "./styles";
import { MdClose } from "react-icons/md";

type ComponentProps = {
    appointmentId: number
}

const AppointmentModal: FC<ComponentProps> = ({ appointmentId }) => {
    console.log("modal abriu")

    return (
        <Wrapper>
            <div className="modal-wrapper">
                modaaaaaaaaal {appointmentId}
            </div>
        </Wrapper>
    );
}

export default AppointmentModal;