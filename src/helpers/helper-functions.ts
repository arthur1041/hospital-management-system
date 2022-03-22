import { week } from "../util/calendar-util";

export const getEntityById = (id: number, entityList: any[]) => {
    let result = null;

    for (let i = 0; i < entityList.length; i++) {
        const entity = entityList[i];
        if (Number(entity.id) === id) {
            result = entity;
            break;
        }
    }

    return result;
}

export const formatAppointmentDates = (appointment: any) => {
    const startDate: Date = appointment.startTime;

    if (!appointment.endTime) {
        return (startDate.getDate().toString().length < 2 ? '0' + startDate.getDate() : startDate.getDate()) + "/"
            + ((startDate.getMonth() + 1).toString().length < 2 ? '0' + (startDate.getMonth() + 1) : startDate.getMonth()) + "/"
            + (startDate.getFullYear().toString().length < 2 ? '0' + startDate.getFullYear() : startDate.getFullYear()) + " "
            + (startDate.getHours() ? (startDate.getHours().toString().length < 2 ? '0' + startDate.getHours() : startDate.getHours()) : '00') + ":"
            + (startDate.getMinutes() ? (startDate.getMinutes().toString().length < 2 ? '0' + startDate.getMinutes() : startDate.getMinutes()) : '00');
    }

    const endDate: Date = appointment.endTime;

    return (startDate.getDate().toString().length < 2 ? '0' + startDate.getDate() : startDate.getDate()) + "/"
        + ((startDate.getMonth() + 1).toString().length < 2 ? '0' + (startDate.getMonth() + 1) : startDate.getMonth()) + "/"
        + (startDate.getFullYear().toString().length < 2 ? '0' + startDate.getFullYear() : startDate.getFullYear()) + " "
        + (startDate.getHours() ? (startDate.getHours().toString().length < 2 ? '0' + startDate.getHours() : startDate.getHours()) : '00') + ":"
        + (startDate.getMinutes() ? (startDate.getMinutes().toString().length < 2 ? '0' + startDate.getMinutes() : startDate.getMinutes()) : '00') + ' - '
        + (endDate.getHours() ? (endDate.getHours().toString().length < 2 ? '0' + endDate.getHours() : endDate.getHours()) : '00') + ":"
        + (endDate.getMinutes() ? (endDate.getMinutes().toString().length < 2 ? '0' + endDate.getMinutes() : endDate.getMinutes()) : '00');

}

const compare = (a: any, b: any) => {
    if (a.startTime < b.startTime) {
        return -1;
    }
    if (a.startTime > b.startTime) {
        return 1;
    }
    return 0;
}

export const sortAppointmentsByDate = (appointments: any[]) => {
    return appointments.sort(compare);
}

export const sortReverseAppointmentsByDate = (appointments: any[]) => {
    return appointments.sort(compare).reverse();
}

export const formatDocument = (document: string) => {
    document = document.replace(/[^\d]/g, "");
    return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export const formatHealthSystemId = (document: string) => {
    document = document.replace(/[^\d]/g, "");
    return document.replace(/(\d{3})(\d{3})(\d{4})/, "$1.$2/$3");
}

export const getAge = (date: Date) => {
    return Math.trunc((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
}

export const getAgeInMonths = (date: Date) => {
    return Math.trunc((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * ((365.25) / 12)));
}

export const getAppointmentsByPatient = (patientId: number, appointments: any[]) => {
    const patientAppointments: any[] = [];

    appointments.forEach(appointment => {
        if (Number(appointment.patientId) === patientId) {
            patientAppointments.push(appointment);
        }
    });

    return patientAppointments;
}

export const getLatestCompletedAppointment = (appointments: any[]) => {
    appointments = appointments.sort(compare).reverse();

    let rAppointment = null;
    for (let i = 0; i < appointments.length; i++) {
        const appointment = appointments[i];
        if (appointment.status === "completed") {
            return appointment;
        }
    }

    return rAppointment;
}

export const removeNonBusinessDay = (appointments: any[]) => {
    const businessDayAppointments: any[] = [];
    appointments.forEach((el: any) => {
        if (el.startTime.getDay() !== week.SUNDAY && el.startTime.getDay() !== week.SATURDAY) {
            businessDayAppointments.push(el);
        }
    });

    return businessDayAppointments;
}

export const convertDate = (date: string) => {
    return new Date(date.replace('Z', ''));
}

const thisWeek = 0; // <-- select this one in order to use the current week
// const lastWeek = 7;
// const weekBeforeLastWeek = 7*2;

let exhibitedWeek = thisWeek;

export const isDateInThisWeek = (date: Date) => {
    date = new Date(date);

    date.setHours(0)
    date.setMinutes(0);

    const todayObj = new Date();
    const todayDate = todayObj.getDate();
    const todayDay = todayObj.getDay();

    const firstDayOfWeek = new Date(todayObj.setDate(todayDate - (todayDay + 1 + exhibitedWeek)));

    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

    return date >= firstDayOfWeek && date <= lastDayOfWeek;
}