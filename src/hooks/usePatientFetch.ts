import { useState, useEffect, useCallback } from "react";
import API from "../api/API";

export const usePatientFetch = (patientId: number, appointmentId: number) => {
    const [state, setState] = useState({
        patient: {},
        appointment: {},
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchPatient = useCallback(async () => {
        if (isNaN(patientId))
            throw new Error("patientId must be a valid number");


        try {
            setError(false);
            setLoading(true);

            const patient: any = API.fetchPatient(patientId);
            let appointment = null;

            if (!isNaN(appointmentId))
                appointment = API.fetchAppointment(appointmentId);

            if (!isNaN(appointmentId)) {
                setState({ patient: { ...patient }, appointment: { ...appointment } })
            } else {
                setState({ patient: { ...patient }, appointment: {} });
            }
            setLoading(false);
        } catch (error) {
            setError(true);
        }
    }, [patientId, appointmentId]);

    useEffect(() => {
        fetchPatient();
    }, [fetchPatient]);

    return { state, loading, error };

}