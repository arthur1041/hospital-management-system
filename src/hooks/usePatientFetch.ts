import { useState, useEffect, useCallback } from "react";
import API from "../api/API";
import { convertDate, getAppointmentsByPatient, removeNonBusinessDay, sortReverseAppointmentsByDate } from "../helpers/helper-functions";

type StateType = {
    patient: any,
    appointment: any,
    patientAppointments: any[]
}

const initialState: StateType = {
    patient: {},
    appointment: {},
    patientAppointments: []
};

export const usePatientFetch = (patientId: number, appointmentId: number) => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchPatient = useCallback(async () => {
        try {
            if (isNaN(patientId)) {
                setLoading(false);
                throw new Error("patientId must be a valid number");
            }
            
            setError(false);
            setLoading(true);

            const patient: any = await API.fetchPatient(patientId);

            if (!patient) {
                setLoading(false);
                throw new Error("Invalid patient found");
            }

            patient.birthday = convertDate(patient.birthday);

            let appointment: any = null;

            if (!isNaN(appointmentId)) {
                appointment = await API.fetchAppointment(appointmentId);
                appointment.startTime = convertDate(appointment.startTime);
                if (appointment.endTime)
                    appointment.endTime = convertDate(appointment.endTime);
            }

            let patientAppointments = sortReverseAppointmentsByDate(getAppointmentsByPatient(patient.id, await API.fetchAppointments()));

            let appointmentIsInList: boolean = false;
            patientAppointments.forEach(el => {
                el.startTime = convertDate(el.startTime);
                if (el.endTime)
                    el.endTime = convertDate(el.endTime);

                if(appointment !== null && (Number(el.id) === Number(appointment.id))){
                    appointmentIsInList = true;
                }
            });

            if(!appointmentIsInList) {
                appointment = null;
            }

            patientAppointments = removeNonBusinessDay(patientAppointments);

            if (!isNaN(appointmentId)) {
                setState({ patient: { ...patient }, appointment: { ...appointment }, patientAppointments })
            } else {
                setState({ patient: { ...patient }, appointment: {}, patientAppointments });
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