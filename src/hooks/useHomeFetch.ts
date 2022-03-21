import { useState, useEffect } from "react";
import API from "../api/API";
import { sortReverseAppointmentsByDate } from "../helpers/helper-functions";
import { week } from "../util/calendar-util";

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

            let appointments = await API.fetchAppointments();
            const patients = await API.fetchPatients();

            appointments.forEach((appointment: any) => {
                if (appointment.startTime)
                    appointment.startTime = new Date(appointment.startTime.replace("Z", ""));
                if (appointment.endTime)
                    appointment.endTime = new Date(appointment.endTime.replace("Z", ""));
            });
            
            const businessDayAppointments: any[] = [];
            appointments.forEach((el: any) => {
                if(el.startTime.getDay() !== week.SUNDAY && el.startTime.getDay() !== week.SATURDAY){
                    businessDayAppointments.push(el);
                }
            });

            appointments = businessDayAppointments;

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