import { useState, useEffect } from "react";
import API from "../api/API";
import { removeNonBusinessDay, sortReverseAppointmentsByDate } from "../helpers/helper-functions";

const initialState = {
    appointments: [],
    patients: [],
}

export const useHomeFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchAppointmentsAndPatients = async () => {
        try {
            setError(false);
            setLoading(true);

            let appointments = await API.fetchAppointments();
            const patients = await API.fetchPatients();

            appointments.forEach((appointment: any) => {
                if (appointment.startTime)
                    appointment.startTime = new Date(appointment.startTime.replace("Z", ""));
                if (appointment.endTime)
                    appointment.endTime = new Date(appointment.endTime.replace("Z", ""));
            });
            

            appointments = removeNonBusinessDay(appointments);

            appointments = sortReverseAppointmentsByDate(appointments);

            setState({
                appointments,
                patients
            });
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchAppointmentsAndPatients();
    }, []);

    return { state, loading, error };
}