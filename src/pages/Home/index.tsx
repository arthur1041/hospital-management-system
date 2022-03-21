import React, { FC } from 'react';
import AppointmentStatus from '../../components/ApointmentStatus';
import AppointmentTypes from '../../components/AppointmentTypes';
import Calendar from '../../components/Calendar';
import History from '../../components/History';
import MainGrid from '../../components/MainGrid';
import PatientsList from '../../components/PatientsList';
import { useHomeFetch } from '../../hooks/useHomeFetch';
import { IndicatorsContainer } from './styles';

const Home: FC = () => {

    const { state, loading, error } = useHomeFetch();


    if (loading) {
        return <div><h1>Loading...</h1></div>
    }

    if (error) {
        return <div><h1>Something went wrong</h1></div>
    }

    return (
        <div className="Home">
            <MainGrid breadcrumbText="patients">
                <IndicatorsContainer>
                    <AppointmentStatus />
                    <AppointmentTypes />
                </IndicatorsContainer>
                <Calendar appointments={state.appointments} patients={state.patients} />
                <History appointments={state.appointments} patients={state.patients} />
                <PatientsList patients={state.patients} />
            </MainGrid>
        </div>
    );
}

export default Home;
