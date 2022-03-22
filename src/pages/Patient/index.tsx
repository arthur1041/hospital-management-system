import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import AppointmentDetails from '../../components/AppointmentDetails';
import Card from '../../components/Card';
import History from '../../components/History';
import MainGrid from '../../components/MainGrid';
import { PatientAppointments } from '../../components/PatientAppointments';
import { formatAppointmentDates, formatDocument, formatHealthSystemId, getAge, getAgeInMonths, getLatestCompletedAppointment } from '../../helpers/helper-functions';
import { usePatientFetch } from '../../hooks/usePatientFetch';
import { CardsGrid } from './styles';

const Patient: FC = () => {

    const { patientId, appointmentId } = useParams();

    const { state, loading, error } = usePatientFetch(Number(patientId), Number(appointmentId));

    if (loading) {
        return <div><h1>Loading...</h1></div>
    }

    if (error) {
        return <div><h1>Something went wrong</h1></div>
    }

    const latestAppointment = getLatestCompletedAppointment(state.patientAppointments);

    return (
        <div className="Home">
            <MainGrid breadcrumbText={state.patient.name}>
                {
                    state.appointment.id > 0 ?
                        <AppointmentDetails
                            specialty={state.appointment.specialty}
                            description={state.appointment.description}
                            notes={state.appointment.notes}
                            mt={true}
                            appDetails="Selected app. details" />
                        : ''
                }
                <CardsGrid>
                    <div className='grid-item'>
                        <Card>
                            <h5 style={{ paddingBottom: '30px' }}>Patient Info</h5>
                            <h2 style={{ paddingBottom: '10px' }}>{state.patient.name}</h2>
                            <div style={{ fontSize: '13px' }} ><span>{formatDocument(state.patient.document)}</span><span style={{ float: "right" }}>{getAge(state.patient.birthday) > 0 ? getAge(state.patient.birthday) + 'y/o' : getAgeInMonths(state.patient.birthday) + ' months'}</span></div>
                        </Card>
                    </div>
                    <div className='grid-item'>
                        <Card>
                            <h5 style={{ paddingBottom: '30px' }}>Plan Info</h5>
                            <h2 style={{ paddingBottom: '10px' }}>{state.patient.insurancePlan}</h2>
                            <div style={{ fontSize: '13px' }} ><span>{formatHealthSystemId(state.patient.healthSystemId)}</span></div>
                        </Card>
                    </div>
                    {
                        latestAppointment ?
                            <div className='grid-item'>
                                <Card>
                                    <h5 style={{ paddingBottom: '30px' }}>Latest App.</h5>
                                    <h2 style={{ paddingBottom: '10px', textTransform: 'capitalize' }}>{getLatestCompletedAppointment(state.patientAppointments).specialty}</h2>
                                    <div style={{ fontSize: '13px' }} ><span>{formatAppointmentDates(getLatestCompletedAppointment(state.patientAppointments))}</span></div>
                                </Card>
                            </div>
                            : ''
                    }
                </CardsGrid>
                <History title='Appointments' appointments={state.patientAppointments} patients={[state.patient]} />
                <PatientAppointments appointments={state.patientAppointments} />
            </MainGrid>
        </div>
    );
}

export default Patient;
