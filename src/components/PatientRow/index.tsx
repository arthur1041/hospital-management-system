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
            <div className="grid-item document">{document}</div>
            <div className="grid-item name">{name}</div>
            <div className="grid-item plan"><span>{plan}</span></div>
        </Wrapper>
    );
}



export default PatientRow;