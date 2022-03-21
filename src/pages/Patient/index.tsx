import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import AppointmentRow from '../../components/AppointmentRow';
import Card from '../../components/Card';
import MainGrid from '../../components/MainGrid';
import { PatientAppointments } from '../../components/PatientAppointments';
import { usePatientFetch } from '../../hooks/usePatientFetch';
import { CardsGrid } from './styles';

const Patient: FC = () => {

    const { patientId, appointmentId } = useParams();

    const {state, loading, error} = usePatientFetch(Number(patientId), Number(appointmentId));

    console.log('paramaters', patientId, appointmentId );

    return (
        <div className="Home">
            <MainGrid breadcrumbText="patient name">
                <CardsGrid>
                    <div className='grid-item'>
                        <Card>
                            <h5 style={{ paddingBottom: '30px' }}>Patient Info</h5>
                            <h2 style={{ paddingBottom: '10px' }}>Herman Holland</h2>
                            <div style={{ fontSize: '13px' }} ><span>XXX.XXX.XXX-XX</span><span style={{ float: "right" }}>51y/o</span></div>
                        </Card>
                    </div>
                    <div className='grid-item'>
                        <Card>
                            <h5 style={{ paddingBottom: '30px' }}>Plan Info</h5>
                            <h2 style={{ paddingBottom: '10px' }}>National Basic</h2>
                            <div style={{ fontSize: '13px' }} ><span>752.921/6400</span></div>
                        </Card>
                    </div>
                    <div className='grid-item'>
                        <Card>
                            <h5 style={{ paddingBottom: '30px' }}>Latest App.</h5>
                            <h2 style={{ paddingBottom: '10px' }}>Neurology</h2>
                            <div style={{ fontSize: '13px' }} ><span>04/30/2021</span></div>
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
