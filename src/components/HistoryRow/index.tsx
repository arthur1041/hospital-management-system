import React, { FC } from "react";
import { Wrapper } from "./styles";

type ComponentProps = {
    date: string,
    status: string,
    name: string,
    appointmentType: string
}

const HistoryRow: FC<ComponentProps> = ({ date, status, name, appointmentType }) => {
    return (
        <Wrapper>
            <div className="grid-item date">{date}</div>
            <div className={"grid-item status " + status + "_styling"}><span>{status}</span></div>
            <div className="grid-item name">{name}</div>
            <div className="grid-item appointment-type"><span>{appointmentType}</span></div>
        </Wrapper>
    );
}

export default HistoryRow;