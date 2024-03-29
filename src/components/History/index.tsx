import React, { FC, useEffect, useState } from "react";
import { useSpring, animated } from 'react-spring';
import { Link } from "react-router-dom";
import { formatAppointmentDates, getEntityById, sortReverseAppointmentsByDate } from "../../helpers/helper-functions";
import AppointmentModal from "../AppointmentModal";
import HistoryRow from "../HistoryRow";
import Pagination from "../Pagination";
import Spinner from "../Spinner";
import { Wrapper } from "./styles";

type ComponentProps = {
    appointments: any[],
    patients: any[],
    title?: string,
    openModal?: boolean
}

const getAppointmentsHistory = (appointments: any[]) => {
    const appointmentsHistory: any[] = [];

    appointments.forEach(el => {
        if(el.startTime < new Date()){
            appointmentsHistory.push(el);
        }
    });

    return sortReverseAppointmentsByDate(appointmentsHistory);
};

const History: FC<ComponentProps> = ({ appointments, patients, title, openModal }) => {

    appointments = getAppointmentsHistory(appointments);

    const [currentPage, setCurrentPage] = useState(1);
    const [render, setRender] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [lastAppoinmentId, setLastAppoinmentId] = useState(0);

    const appointmentsPerPage = 10;

    const indexOfLastAppointment = currentPage * appointmentsPerPage;
    const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
    const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

    const paginate = (pageNumber: number) => {
        setRender(false);
        setCurrentPage(pageNumber)
    };

    const popModal = (id: number) => {
        if (id !== Number(lastAppoinmentId)) {
            setShowModal(false);
        }
        setLastAppoinmentId(id);
        setShowModal(prev => !prev);
    }

    useEffect(() => {
        setTimeout(() => {
            if (!render)
                setRender(true);
        }, 500)
    }, [currentPage, render]);

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    });

    return (
        <Wrapper>
            {
                showModal ?
                    <animated.span style={{...animation}}>
                        <AppointmentModal appointmentId={lastAppoinmentId} setShowModal={setShowModal} showModal={showModal} />
                    </animated.span>
                    : ''
            }
            <div className="history-header">
                <h3>{title && title.length > 0 ? title : "History"}</h3>
            </div>
            {render ?
                <div className="registries-container">

                    {
                        (() => {
                            if (openModal) {
                                return currentAppointments.map((el: any) => {
                                    const patient = getEntityById(el.patientId, patients);
                                    return (
                                        <div key={el.id} className="link" onClick={() => { popModal(el.id) }}>
                                            <HistoryRow date={formatAppointmentDates(el)} status={el.status} name={patient !== null ? patient.name : ''} appointmentType={el.type} />
                                        </div>
                                    );
                                })
                            }

                            return currentAppointments.map((el: any) => {
                                const patient = getEntityById(el.patientId, patients);
                                return (
                                    <Link key={el.id} className="link" to={`/patient/${el.patientId}/appointment/${el.id}`}>
                                        <HistoryRow date={formatAppointmentDates(el)} status={el.status} name={patient !== null ? patient.name : ''} appointmentType={el.type} />
                                    </Link>
                                );
                            });
                        })()
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