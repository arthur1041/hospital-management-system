import React, { FC, useState } from "react";
import { Wrapper } from "./styles";

type ComponentProps = {
    totalElements: number,
    elementsPerPage: number,
    paginate: Function
}

const Pagination: FC<ComponentProps> = ({totalElements, elementsPerPage, paginate}) => {

    const [clickedItem, setClickedItem] = useState(1);

    const pageNumbers: number[] = [];

    const overridenPaginate = (number: number) => {
        paginate(number);
        
        setClickedItem(number);

    }

    for(let i = 1; i<=Math.ceil(totalElements / elementsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <Wrapper>
            <div className="pagination">
                {pageNumbers.map((number: number) => {
                    return (
                        <div key={number} onClick={()=>overridenPaginate(number)} className={'page-item ' + (number === clickedItem ? 'active' : '')}>
                            <span className="page-link">
                                {number}
                            </span>
                        </div>
                    )
                })}
            </div>
        </Wrapper>
    );
}

export default Pagination;