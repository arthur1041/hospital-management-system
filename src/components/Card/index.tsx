import React, { FC } from "react";
import { Wrapper } from "./styles";

const Card: FC = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default Card;