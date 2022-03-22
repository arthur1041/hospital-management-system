import { useCallback, useEffect, useState } from "react";
import API from "../api/API";
import { convertDate } from "../helpers/helper-functions";

const initialState: any = {};

export const useUniqueAppointmentFetch = (appointmentId: number) => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchAppointment = useCallback(async () => {

        try {
            setError(false);
            setLoading(true);

            const appointment = await API.fetchAppointment(appointmentId);
            
            appointment.startTime = convertDate(appointment.startTime);
            if(appointment.endTime) {
                appointment.endTime = convertDate(appointment.endTime)
            };

            setState(appointment);

            setLoading(false);
        } catch (e) {
            setError(true);
        }

    }, [appointmentId])

    useEffect(() => {
        fetchAppointment();
    }, [fetchAppointment]);

    return { state, loading, error }
}