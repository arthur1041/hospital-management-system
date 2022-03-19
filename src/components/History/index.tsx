import React, {FC} from "react";
import { Wrapper } from "./style";

const History: FC = ({children}) => {
    return (
        <Wrapper>
            <div className="history-header">
                <h3>History</h3>
            </div>
            <div>
                {children}
            </div>
        </Wrapper>
    );
}

export default History;