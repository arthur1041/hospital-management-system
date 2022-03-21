import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import AppointmentRow from '../../components/AppointmentRow';
import Card from '../../components/Card';
import MainGrid from '../../components/MainGrid';
import { PatientAppointments } from '../../components/PatientAppointments';
import { formatAppointmentDates, formatDocument, formatHealthSystemId, getAge, getLatestCompletedAppointment } from '../../helpers/helper-functions';
import { usePatientFetch } from '../../hooks/usePatientFetch';
import { CardsGrid } from './styles';

const Patient: FC = () => {

    const { patientId, appointmentId } = useParams();

    const {state, loading, error} = usePatientFetch(Number(patientId), Number(appointmentId));

    if (loading) {
        return <div><h1>Loading...</h1></div>
    }

    if (error) {
        return <div><h1>Something went wrong</h1></div>
    }

    return (
        <div className="Home">
            <MainGrid breadcrumbText="patient name">
                <CardsGrid>
                    <div className='grid-item'>
                        <Card>
                            <h5 style={{ paddingBottom: '30px' }}>Patient Info</h5>
                            <h2 style={{ paddingBottom: '10px' }}>{state.patient.name}</h2>
                            <div style={{ fontSize: '13px' }} ><span>{formatDocument(state.patient.document)}</span><span style={{ float: "right" }}>{getAge(state.patient.birthday)}y/o</span></div>
                        </Card>
                    </div>
                    <div className='grid-item'>
                        <Card>
                            <h5 style={{ paddingBottom: '30px' }}>Plan Info</h5>
                            <h2 style={{ paddingBottom: '10px' }}>{state.patient.insurancePlan}</h2>
                            <div style={{ fontSize: '13px' }} ><span>{formatHealthSystemId(state.patient.healthSystemId)}</span></div>
                        </Card>
                    </div>
                    <div className='grid-item'>
                        <Card>
                            <h5 style={{ paddingBottom: '30px' }}>Latest App.</h5>
                            <h2 style={{ paddingBottom: '10px', textTransform: 'capitalize' }}>{getLatestCompletedAppointment(state.patientAppointments).specialty}</h2>
                            <div style={{ fontSize: '13px' }} ><span>{formatAppointmentDates(getLatestCompletedAppointment(state.patientAppointments))}</span></div>
                        </Card>
                    </div>
                </CardsGrid>
                <PatientAppointments>
                    <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                    <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                    <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                    <AppointmentRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                </PatientAppointments>
            </MainGrid>
        </div>
    );
}

export default Patient;
