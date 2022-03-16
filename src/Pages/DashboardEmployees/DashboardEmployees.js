import './DashboardEmployees.css'
import {useContext, useState} from 'react';

import {DasshContext} from '../../context/DashContext'
import PieChart from '../../Components/AllChart/PieChart';

const DashboardEmployees = () => {
    const {changeYear, dataChart, yearData} = useContext(DasshContext)
    
    console.log(changeYear, dataChart, yearData)
    console.log()
    return (
        <></>
    //     <div className='global-container'>
    //         <h1>Les résultat de l'année : {yearData}</h1>

    //         <form>
    //             <label htmlFor="year">Choisissez une date</label>
    //             <select onChange={changeYear}  id="year">
    //                 <option value="2020">2020</option>
    //                 <option value="2019">2019</option>
    //                 <option value="2018">2018</option>
    //                 <option value="2017">2017</option>
    //             </select>
    //         </form>

    //         <div className="dashboard-container">
    //             <PieChart data={dataChart.chart5} labels={"Chiffres bimestriels "}/>
    //             {/* <PieChart data={dataChart.chart6} labels={"Chiffres bimestriels "}/>
    //             <PieChart data={dataChart.chart7} labels={"Chiffres bimestriels "}/>
    //             <PieChart data={dataChart.chart8} labels={"Chiffres bimestriels "}/> */}
    //         </div>
    //     </div>
    )

};

export default DashboardEmployees;