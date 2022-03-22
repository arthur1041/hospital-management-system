import React, { FC, useRef } from "react";
import { Wrapper } from "./styles";
import { MdClose } from "react-icons/md";

type ComponentProps = {
    appointmentId: number,
    setShowModal: Function,
    showModal: boolean
}

const AppointmentModal: FC<ComponentProps> = ({ appointmentId, showModal, setShowModal }) => {
    
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = (e: any) => {
        if(modalRef.current === e.target){
            setShowModal(false);
        }
    }

    return (
        <Wrapper ref={modalRef} onClick={closeModal}>
            <div className="modal-wrapper">
                modaaaaaaaaaaaaaaaaaaaaaaaaaaaal {appointmentId}
                <span className="close-modal-button" onClick={() => setShowModal(false)} ><MdClose size={30} /></span>
            </div>
        </Wrapper>
    );
}

export default AppointmentModal;