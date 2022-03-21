import { getEntityById, formatAppointmentDates, sortAppointmentsByDate, sortReverseAppointmentsByDate } from './helper-functions';

it('properly finds an entity given an id', () => {
    const entities: any[] = [{ id: 1, name: 'Peter' }, { id: 2, name: 'Linda' }, { id: 3, name: 'John' }, { id: 4, name: 'Gwen' }];

    expect(getEntityById(3, entities).name).toBe('John');
});

it('properly formats a date', () => {
    const currentDate: Date = new Date();
    const currentDatePlusAnHour = new Date(currentDate);
    currentDatePlusAnHour.setHours(currentDate.getHours()+1);
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