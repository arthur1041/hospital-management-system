import API from './API';

it('properly fetches appointments', async () => {
    const resultSet: Object[] = (await API.fetchAppointments());
    expect(resultSet.length).toBeGreaterThan(0);
});

it('properly fetches appointment',async () => {
    const result: Object = (await API.fetchAppointment(1));
    expect(Object.keys(result).length).toBeGreaterThan(0);
});

it('properly fetches patients', async () => {
    const resultSet: Object[] = (await API.fetchPatients());
    expect(resultSet.length).toBeGreaterThan(0);
})

it('properly fetches patient',async () => {
    const result: Object = (await API.fetchPatient(1));
    expect(Object.keys(result).length).toBeGreaterThan(0);
});