import React, { FC, useEffect, useState } from "react";
import { isDateInThisWeek, sortReverseAppointmentsByDate } from "../../helpers/helper-functions";
import AppointmentDetails from "../AppointmentDetails";
import AppointmentRow from "../AppointmentRow";
import Pagination from "../Pagination";
import { Wrapper } from "./styles";

type ComponentProps = {
    appointments: any[]
}

const getAppointmentsInThisWeek = (appointments: any[]) => {
    const appointmentsInThisWeek: any[] = [];
    appointments.forEach((el) => {
        if (isDateInThisWeek(el.startTime)) {
            appointmentsInThisWeek.push(el);
        }
    });

    return appointmentsInThisWeek;
}

const getAppointmentsAfterToday = (appointments: any[]) => {
    const appointmentsAfterToday: any[] = [];
    appointments.forEach((el) => {
        if (el.startTime > new Date()) {
            appointmentsAfterToday.push(el);
        }
    });

    return appointmentsAfterToday;
}

const getAppointmentsHistory = (appointments: any[]) => {
    return sortReverseAppointmentsByDate(appointments);
};

export const PatientAppointments: FC<ComponentProps> = ({ children, appointments }) => {

    const [showThisWeek, setShowThisWeek] = useState(true);
    const [showUpcoming, setShowUpcoming] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const [showDetails, setshowDetails] = useState(false);

    const [currentPageWeek, setCurrentPageWeek] = useState(1);
    const [currentPageUpcoming, setCurrentPageUpcoming] = useState(1);
    const [currentPageHistory, setcurrentPageHistory] = useState(1);


    const [render, setRender] = useState(true);
    const appointmentsPerPage = 10;

    const focusThisWeek = () => {
        setShowUpcoming(false);
        setShowHistory(false);
        setShowThisWeek(true);
    }

    const focusUpcoming = () => {
        setShowUpcoming(true);
        setShowHistory(false);
        setShowThisWeek(false);
    }

    const focusHistory = () => {
        setShowUpcoming(false);
        setShowHistory(true);
        setShowThisWeek(false);
    }

    const paginateWeek = (pageNumber: number) => {
        setCurrentPageWeek(pageNumber)
    };

    const paginateUpcoming = (pageNumber: number) => {
        setCurrentPageUpcoming(pageNumber)
    };

    const paginateHistory = (pageNumber: number) => {
        setcurrentPageHistory(pageNumber)
    };

    const appointmentsInThisWeek = getAppointmentsInThisWeek(appointments);
    const appointmentsAfterToday = getAppointmentsAfterToday(appointments);
    const appointmentsHistory = getAppointmentsHistory(appointments);

    const indexOfLastAppointmentWeek = currentPageWeek * appointmentsPerPage;
    const indexOfFirstAppointmentWeek = indexOfLastAppointmentWeek - appointmentsPerPage;
    const currentAppointmentsWeek = appointmentsInThisWeek.slice(indexOfFirstAppointmentWeek, indexOfLastAppointmentWeek);

    const indexOfLastAppointmentUpcoming = currentPageUpcoming * appointmentsPerPage;
    const indexOfFirstAppointmentUpcoming = indexOfLastAppointmentUpcoming - appointmentsPerPage;
    const currentAppointmentsUpcoming = appointmentsAfterToday.slice(indexOfFirstAppointmentUpcoming, indexOfLastAppointmentUpcoming);

    const indexOfLastAppointmentHistory = currentPageHistory * appointmentsPerPage;
    const indexOfFirstAppointmentHistory = indexOfLastAppointmentHistory - appointmentsPerPage;
    const currentAppointmentsHistory = appointmentsHistory.slice(indexOfFirstAppointmentHistory, indexOfLastAppointmentHistory);

    useEffect(() => {
        if (appointmentsInThisWeek.length <= 0) {
            if (appointmentsAfterToday.length > 0) {
                focusUpcoming()
            } else {
                focusHistory();
            }

        }

        if (appointmentsAfterToday.length <= 0) {
            if (appointmentsHistory.length > 0) {
                focusHistory()
            } else {
                focusThisWeek();
            }
        }

        if (appointmentsHistory.length <= 0) {
            if (appointmentsInThisWeek.length > 0) {
                focusThisWeek();
            } else {
                focusUpcoming();
            }
        }

    }, [appointmentsAfterToday.length, appointmentsHistory.length, appointmentsInThisWeek.length])

    return (
        <Wrapper>
            <div className="tabs">
                {appointmentsInThisWeek.length > 0 ? <div className={`tab ${showThisWeek ? "active" : ''}`} onClick={() => focusThisWeek()} >This Week</div> : ''}
                {appointmentsAfterToday.length > 0 ? <div className={`tab ${showUpcoming ? "active" : ''}`} onClick={() => focusUpcoming()}>Upcoming</div> : ''}
                {appointmentsHistory.length > 0 ? <div className={`tab ${showHistory ? "active" : ''}`} onClick={() => focusHistory()}>History</div> : ''}
            </div>
            <div className="lists-container">
                {appointmentsInThisWeek.length > 0 ?
                    <div className={`appointments-list this-week ${showThisWeek ? "show" : ''} `}>
                        <div className="list">
                            {currentAppointmentsWeek.map((el) => {
                                return (
                                    <AppointmentRow key={el.id} appointment={el} />
                                )
                            })}
                        </div>
                        <div className="paginator-container">
                            <Pagination elementsPerPage={appointmentsPerPage} totalElements={appointmentsInThisWeek.length} paginate={paginateWeek} />
                        </div>
                    </div>
                    : ''
                }
                {appointmentsAfterToday.length > 0 ?
                    <div className={`appointments-list upcoming ${showUpcoming ? "show " : ''}`}>
                        <div className="list">
                            {currentAppointmentsUpcoming.map((el) => {
                                return (
                                    <AppointmentRow key={el.id} appointment={el} />
                                )
                            })}
                        </div>
                        <div className="paginator-container">
                            <Pagination elementsPerPage={appointmentsPerPage} totalElements={appointmentsAfterToday.length} paginate={paginateUpcoming} />
                        </div>
                    </div>
                    : ''
                }
                {appointmentsHistory.length > 0 ?
                    <div className={`appointments-list history ${showHistory ? "show" : ''}`}>
                        <div className="list">
                            {currentAppointmentsHistory.map((el) => {
                                return (
                                    <AppointmentRow key={el.id} appointment={el} />
                                )
                            })}
                        </div>
                        <div className="paginator-container">
                            <Pagination elementsPerPage={appointmentsPerPage} totalElements={appointmentsHistory.length} paginate={paginateHistory} />
                        </div>
                    </div>
                    : ''}
                <div className={`appointment-details ${showDetails ? "show" : ''}`}>
                    <AppointmentDetails description="a" notes="a" specialty="a" round="none" noPadding={true} mt={false} />
                </div>
            </div>
        </Wrapper>
    );
}