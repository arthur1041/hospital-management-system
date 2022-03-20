import React, { FC } from 'react';
import Calendar from '../../components/Calendar';
import History from '../../components/History';
import HistoryRow from '../../components/HistoryRow';
import MainGrid from '../../components/MainGrid';

const Home: FC = () => {
  return (
    <div className="Home">
        <MainGrid breadcrumbText="patients">
            <Calendar/>
            <History>
                <HistoryRow date="04/19/2021 12:00" status="completed" name="John Doe" appointmentType="firstVisit" />
                <HistoryRow date="04/19/2021 12:00" status="cancelled" name="Mary Doe" appointmentType="followUp" />
                <HistoryRow date="04/19/2021 12:00" status="absent" name="John Doe" appointmentType="checkUp" />
                <HistoryRow date="04/19/2021 12:00" status="completed" name="Mary Doe" appointmentType="exam" />
                <HistoryRow date="04/19/2021 12:00" status="pending" name="John Doe" appointmentType="surgery" />
            </History>
        </MainGrid>
    </div>
  );
}

export default Home;
