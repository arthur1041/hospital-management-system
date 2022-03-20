import { API_URL } from "./config";

const apiSettings = {
    fetchAppointments: async () => {
        const endpoint = `${API_URL}/appointments`;

        return await (await fetch(endpoint)).json();
    },
    fetchAppointment: async (appointmentId: number) => {
        const endpoint = `${API_URL}/appointments/${appointmentId}`;

        return await (await fetch(endpoint)).json();
    },
    fetchPatients: async () => {
        const endpoint = `${API_URL}/patients`;

        return await (await fetch(endpoint)).json();
    },
    fetchPatient: async (appointmentId: number) => {
        const endpoint = `${API_URL}/patients/${appointmentId}`;

        return await (await fetch(endpoint)).json();
    }
}

export default apiSettings;