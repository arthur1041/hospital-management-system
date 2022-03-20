import React, {FC} from "react";
import { Wrapper } from "./styles";

const History: FC = ({children}) => {
    return (
        <Wrapper>
            <div className="history-header">
                <h3>History</h3>
            </div>
            <div className="registries-container">
                {children}
            </div>
        </Wrapper>
    );
}

export default History;