import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatAppointmentDates, getEntityById } from "../../helpers/helper-functions";
import HistoryRow from "../HistoryRow";
import Pagination from "../Pagination";
import Spinner from "../Spinner";
import { Wrapper } from "./styles";

type ComponentProps = {
    appointments: any[],
    patients: any[]
}

const History: FC<ComponentProps> = ({ appointments, patients }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [render, setRender] = useState(true);
    const appointmentsPerPage = 10;

    const indexOfLastAppointment = currentPage * appointmentsPerPage;
    const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
    const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

    const paginate = (pageNumber: number) => {
        setRender(false);
        setCurrentPage(pageNumber)
    };

    useEffect(() => {
        setTimeout(function () {
            if (!render)
                setRender(true);
        }.bind(this), 500)
    }, [currentPage, render]);

    return (
        <Wrapper>
            <div className="history-header">
                <h3>History</h3>
            </div>
            {render ?
                <div className="registries-container">

                    {
                        currentAppointments.map((el: any) => {
                            const patient = getEntityById(el.patientId, patients);
                            return (
                                <Link key={el.id} className="link" to={`/patient/${el.patientId}/appointment/${el.id}`}>
                                    <HistoryRow key={el.id} date={formatAppointmentDates(el)} status={el.status} name={patient !== null ? patient.name : ''} appointmentType={el.type} />
                                </Link>
                            );
                        })
                    }
                </div>
                :
                <div className="spinner-container">
                    <Spinner />
                </div>
            }
            <div className="paginator-container"><Pagination elementsPerPage={appointmentsPerPage} totalElements={appointments.length} paginate={paginate} /></div>
        </Wrapper>
    );

}

export default History;