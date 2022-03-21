import React, { FC, useState } from "react";
import { formatAppointmentDates, getEntityById } from "../../helpers/helper-functions";
import HistoryRow from "../HistoryRow";
import Pagination from "../Pagination";
import { Wrapper } from "./styles";

type ComponentProps = {
    appointments: any[],
    patients: any[]
}

const History: FC<ComponentProps> = ({ appointments, patients }) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [appointmentsPerPage, setAppointmentsPerPagePerPage] = useState(10);

    const indexOfLastAppointment = currentPage * appointmentsPerPage;
    const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
    const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <Wrapper>
            <div className="history-header">
                <h3>History</h3>
            </div>
            <div className="registries-container">
                
                {
                    currentAppointments.map((el: any) => {
                        const patient = getEntityById(el.patientId, patients);
                        return <HistoryRow key={el.id} date={formatAppointmentDates(el)} status={el.status} name={patient !== null ? patient.name : ''} appointmentType={el.type} />;
                    })
                }
            </div>
            <div className="paginator-container"><Pagination elementsPerPage={appointmentsPerPage} totalElements={appointments.length} paginate={paginate} /></div>
        </Wrapper>
    );
}

export default History;