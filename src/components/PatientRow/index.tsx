import React, { FC } from "react";
import { Wrapper } from "./styles";

type ComponentProps = {
    name: string,
    plan: string,
    document: string,
    
}

const PatientRow: FC<ComponentProps> = ({ name, document, plan}) => {
    return (
        <Wrapper>
            <div className="grid-item date">{document}</div>
            <div className="grid-item name">{name}</div>
            <div className="grid-item appointment-type">{plan}</div>
        </Wrapper>
    );
}



export default PatientRow;