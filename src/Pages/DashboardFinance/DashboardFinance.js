import './DashboardFinance.css'
import {useState, useContext} from 'react';
import BarChart from '../../Components/AllChart/BarChart';
import { DasshContext } from '../../context/DashContext';


const DashboardFinance = () => {

    const {changeYear, dataChart, yearData} = useContext(DasshContext)
    console.log("mon log",changeYear, dataChart, yearData)


    return (
        <div className='global-container'>
            <h1>Les résultat de l'année : {yearData}</h1>

            <form>
                <label htmlFor="year">Choisissez une date</label>
                <select onChange={changeYear} id="year">
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                </select>
            </form>

        <div className="dashboard-container">
            <BarChart data={dataChart.chart1} name={"Chiffres bimestriels "}/>
        </div>
        </div>
    );
};

export default DashboardFinance;