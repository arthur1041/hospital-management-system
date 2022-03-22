import React, { FC } from "react";
import { Wrapper } from "./styles";
import { MdClose } from "react-icons/md";

type ComponentProps = {
    appointmentId: number,
    setShowModal: Function
}

const AppointmentModal: FC<ComponentProps> = ({ appointmentId, setShowModal }) => {
    console.log("modal abriu")

    return (
        <Wrapper>
            <div className="modal-wrapper">
                modaaaaaaaaaaaaaaaaaaaaaaaaaaaal {appointmentId}
                <span className="close-modal-button" onClick={() => setShowModal(false)} ><MdClose size={30} /></span>
            </div>
        </Wrapper>
    );
}

export default AppointmentModal;