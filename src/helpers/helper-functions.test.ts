import API from '../api/API';
import { getEntityById, formatAppointmentDates, sortAppointmentsByDate, sortReverseAppointmentsByDate, formatDocument, formatHealthSystemId, getAge, getAppointmentsByPatient, getLatestCompletedAppointment, removeNonBusinessDay, convertDate } from './helper-functions';

it('properly finds an entity given an id', () => {
    const entities: any[] = [{ id: 1, name: 'Peter' }, { id: 2, name: 'Linda' }, { id: 3, name: 'John' }, { id: 4, name: 'Gwen' }];

    expect(getEntityById(3, entities).name).toBe('John');
});

it('properly formats a date', () => {
    const currentDate: Date = new Date();
    const currentDatePlusAnHour = new Date(currentDate);
    currentDatePlusAnHour.setHours(currentDate.getHours() + 1);
    const testAppointment = {
        startTime: currentDate,
        endTime: currentDatePlusAnHour
    }

    expect(formatAppointmentDates(testAppointment)).not.toBeNull();
    expect(formatAppointmentDates(testAppointment).length).toBeGreaterThan(0);
});

it('properly sorts objects', () => {

    const testAppointmentArray = [
        {
            startTime: new Date(4000),
        },
        {
            startTime: new Date(1000),
        },
        {
            startTime: new Date(3000),
        },
        {
            startTime: new Date(2000),
        },
    ]

    expect(sortAppointmentsByDate(testAppointmentArray)[0].startTime).toStrictEqual(new Date(1000));
    expect(sortAppointmentsByDate(testAppointmentArray)[3].startTime).toStrictEqual(new Date(4000));
});

it('properly sorts objects reversely', () => {

    const testAppointmentArray = [
        {
            startTime: new Date(4000),
        },
        {
            startTime: new Date(1000),
        },
        {
            startTime: new Date(3000),
        },
        {
            startTime: new Date(2000),
        },
    ]

    expect(sortReverseAppointmentsByDate(testAppointmentArray)[0].startTime).toStrictEqual(new Date(4000));
    expect(sortReverseAppointmentsByDate(testAppointmentArray)[3].startTime).toStrictEqual(new Date(1000));
});


it('properly sorts formats document', () => {

    expect(formatDocument("00000000000")).toBe("000.000.000-00");
});

it('properly sorts formats health system id', () => {

    expect(formatHealthSystemId("0000000000")).toBe("000.000/0000");
});

it('properly calculates age', () => {

    expect(getAge(new Date('2002-12-29'))).toBe(19);
});

it("properly gets a patient's appointments", async () => {
    const appointments: any[] = await API.fetchAppointments();
    const patient: any = (await API.fetchPatients())[0];

    const appointmentsRes = getAppointmentsByPatient(patient.id, appointments);

    expect(appointmentsRes.length).toBeGreaterThan(0);
});

it("properly gets the latest completed appointment", async () => {
    const appointments: any[] = await API.fetchAppointments();

    expect(getLatestCompletedAppointment(appointments)).not.toBeNull();
});

it("properly removes non business days", async () => {
    const appointments: any[] = await API.fetchAppointments();

    appointments.forEach(element => {
        element.startTime = new Date(element.startTime.replace('Z', ''));
    });

    expect(removeNonBusinessDay(appointments).length).toBeGreaterThan(0);
});

it("properly converts a date", async () => {
    const appointments: any[] = await API.fetchAppointments();

    convertDate(appointments[0].startTime);
    
    expect(convertDate(appointments[0].startTime)).toBeInstanceOf(Date);
});