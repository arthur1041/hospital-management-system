import { getEntityById, formatAppointmentDates } from './helper-functions';

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