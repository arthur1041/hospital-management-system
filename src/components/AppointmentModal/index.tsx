import React, { FC, useRef, useState } from "react";
import { Wrapper } from "./styles";
import { MdClose } from "react-icons/md";
import { useUniqueAppointmentFetch } from "../../hooks/useUniqueAppointmentFetch";
import Spinner from "../Spinner";
import { formatAppointmentDates } from "../../helpers/helper-functions";

type ComponentProps = {
    appointmentId: number,
    setShowModal: Function,
    showModal: boolean
}

const AppointmentModal: FC<ComponentProps> = ({ appointmentId, showModal, setShowModal }) => {

    const { state, loading, error } = useUniqueAppointmentFetch(appointmentId);
    console.log("oid", appointmentId);
    const [cxAtiva, setCxAtiva] = useState(true);

    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = (e: any) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    }


    return (
        <Wrapper ref={modalRef} onClick={closeModal}>
            <div className="modal-wrapper">
                {loading ?
                    <div className="spinner-container"><Spinner /></div> :
                    <div className="modal-content">
                        <h2>Appointment Details</h2>
                        <div className="details">
                            <div className="infoset">
                                <h4 className="title">Description:</h4>
                                <div className="content">
                                    {state.description}
                                </div>
                            </div>
                            <div className="infoset m">
                                <h4 className="title">Notes:</h4>
                                {state.notes && state.notes.length > 0 ?
                                    <div className="content">
                                        {state.notes}
                                    </div> :
                                    <div>
                                        <textarea disabled={!cxAtiva} style={{ resize: "none", display: "block" }} rows={4} cols={20}  ></textarea>
                                        <button onClick={() => {setCxAtiva(false)}}>Save</button>
                                    </div>
                                }
                            </div>
                            <div className="infoset m">
                                <h4 className="title">Status:</h4>
                                <div className="content">
                                    {state.status}
                                </div>
                            </div>
                            <div className="infoset m">
                                <h4 className="title">Data e Hora:</h4>
                                <div className="content">
                                    {formatAppointmentDates(state)}
                                </div>
                            </div>
                            <div className="infoset m">
                                <h4 className="title">Specialty:</h4>
                                <div className="content">
                                    <span style={{textTransform: "capitalize"}} >{state.specialty}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <span className="close-modal-button" onClick={() => setShowModal(false)} ><MdClose size={30} /></span>
            </div>
        </Wrapper>
    );
}

export default AppointmentModal;