import React, {useState} from "react";
import CalculationForm from "./components/CalculationForm";
import './style.css'
import Header from "../../components/Header";
import CalculateTable from "./components/Table";

const Calculate = () => {
    const [data, setData] = useState(null)
    console.log(data)
    return (
        <>
            <Header content='Калькулятор ИМТ' />
            <CalculationForm setData={setData} />
            <CalculateTable />
        </>
    )
}

export default Calculate