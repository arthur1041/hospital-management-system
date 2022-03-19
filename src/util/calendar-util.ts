export type HourAndMinutes = {
    hour: number,
    minute: number
}

export const week = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
}

export const getCalendarStructure = () => {
    const hoursAndMinutes: HourAndMinutes[] = [
        {hour: 9, minute: 0},
        {hour: 9, minute: 30},
        {hour: 10, minute: 0},
        {hour: 10, minute: 30},
        {hour: 11, minute: 0},
        {hour: 11, minute: 30},
        {hour: 12, minute: 0},
        {hour: 12, minute: 30},
        {hour: 13, minute: 0},
        {hour: 13, minute: 30},
        {hour: 14, minute: 0},
        {hour: 14, minute: 30},
        {hour: 15, minute: 0},
        {hour: 15, minute: 30},
        {hour: 16, minute: 0},
        {hour: 16, minute: 30},
        {hour: 17, minute: 0},
        {hour: 17, minute: 30},
        {hour: 18, minute: 0},
    ]; 

    const calendarMap: Map<number, HourAndMinutes[]> = new Map<number, HourAndMinutes[]>();
    
    calendarMap.set(week.MONDAY, hoursAndMinutes);
    calendarMap.set(week.TUESDAY, hoursAndMinutes);
    calendarMap.set(week.WEDNESDAY, hoursAndMinutes);
    calendarMap.set(week.THURSDAY, hoursAndMinutes);
    calendarMap.set(week.FRIDAY, hoursAndMinutes);

    return calendarMap;
} 