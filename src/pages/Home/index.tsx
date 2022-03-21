import React, { FC } from 'react';
import AppointmentStatus from '../../components/ApointmentStatus';
import AppointmentTypes from '../../components/AppointmentTypes';
import Calendar from '../../components/Calendar';
import History from '../../components/History';
import HistoryRow from '../../components/HistoryRow';
import MainGrid from '../../components/MainGrid';
import { useHomeFetch } from '../../hooks/useHomeFetch';
import { IndicatorsContainer } from './styles';
import { formatAppointmentDates, getEntityById } from '../../helpers/helper-functions';

const Home: FC = () => {

    const { state, loading, error } = useHomeFetch();
 
    return (
        <div className="Home">
            <MainGrid breadcrumbText="patients">
                <IndicatorsContainer>
                    <AppointmentStatus/>
                    <AppointmentTypes/>
                </IndicatorsContainer>
                <Calendar appointments={state.appointments} patients={state.patients} />
                <History>
                    {
                        state.appointments.map((el: any)=>{
                            const patient = getEntityById(el.patientId, state.patients);
                            return<HistoryRow key={el.id} date={formatAppointmentDates(el)} status={el.status} name={patient !== null ? patient.name : ''} appointmentType={el.type} />;
                        })
                    }
                    {/* <HistoryRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                    <HistoryRow date="04/19/2021 12:00" status="cancelled" name="Mary Doe" appointmentType="followUp" />
                    <HistoryRow date="04/19/2021 12:00" status="absent" name="John Doe" appointmentType="checkUp" />
                    <HistoryRow date="04/19/2021 12:00" status="completed" name="Mary Doe" appointmentType="exam" />
                    <HistoryRow date="04/19/2021 12:00" status="pending" name="John Doe" appointmentType="surgery" /> */}
                </History>
            </MainGrid>
        </div>
    );
}

export default Home;
