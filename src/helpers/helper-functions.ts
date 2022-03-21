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