import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import PatientRow from "../PatientRow";
import Spinner from "../Spinner";
import { Wrapper } from "./styles";

type ComponentProps = {
    patients: any[]
}

const PatientsList: FC<ComponentProps> = ({ patients }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [render, setRender] = useState(true);
    const patientsPerPage = 10;

    const indexOfLastPatient = currentPage * patientsPerPage;
    const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
    const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);

    const paginate = (pageNumber: number) => {
        setRender(false);
        setCurrentPage(pageNumber)
    };

    useEffect(() => {
        setTimeout(function () {
            if (!render)
                setRender(true);
        }.bind(this), 500)
    }, [currentPage, render]);

    return (
        <Wrapper>
            <div className="patients-header">
                <h3>Patients</h3>
            </div>
            {render ?
                <div className="registries-container">

                    {
                        currentPatients.map((el: any) => {
                            return (
                                <Link key={el.id} className="link" to={`/patient/${el.id}`}>
                                    <PatientRow name={el.name} document={el.document} plan={el.insurancePlan} />
                                </Link>
                            );
                        })
                    }
                </div>
                :
                <div className="spinner-container">
                    <Spinner />
                </div>
            }
            <div className="paginator-container"><Pagination elementsPerPage={patientsPerPage} totalElements={patients.length} paginate={paginate} /></div>
        </Wrapper>
    );

}

export default PatientsList;