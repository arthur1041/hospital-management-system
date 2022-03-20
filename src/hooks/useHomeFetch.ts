import { useState, useEffect } from "react";
import API from "../api/API";

const initialState = {
    appointments: [],
    patients: [],
}

export const useHomeFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchAppointmentsAndPatients = async () => {
        try {
            setError(false);
            setLoading(true);

            const appointments = await API.fetchAppointments();
            const patients = await API.fetchPatients();

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

    return {state, loading, error};
}