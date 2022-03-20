import React, { FC } from 'react';
import Card from '../../components/Card';
import MainGrid from '../../components/MainGrid';
import { CardsGrid } from './styles';

const Patient: FC = () => {
    return (
        <div className="Home">
            <MainGrid breadcrumbText="patient name">
                <CardsGrid>
                    <Card>
                        <h5 style={{ paddingBottom: '30px' }}>Patient Info</h5>
                        <h2 style={{ paddingBottom: '10px' }}>Herman Holland</h2>
                        <div style={{ fontSize: '13px' }} ><span>XXX.XXX.XXX-XX</span><span style={{ float: "right" }}>51y/o</span></div>
                    </Card>
                    <Card>
                        <h5 style={{ paddingBottom: '30px' }}>Plan Info</h5>
                        <h2 style={{ paddingBottom: '10px' }}>National Basic</h2>
                        <div style={{ fontSize: '13px' }} ><span>752.921/6400</span></div>
                    </Card>
                    <Card>
                        <h5 style={{ paddingBottom: '30px' }}>Latest App.</h5>
                        <h2 style={{ paddingBottom: '10px' }}>Neurology</h2>
                        <div style={{ fontSize: '13px' }} ><span>04/30/2021</span></div>
                    </Card>
                </CardsGrid>
            </MainGrid>
        </div>
    );
}

export default Patient;
