import {createContext, useState} from 'react'
import fulldata from './fulldata'



export const DasshContext = createContext()

const DasshContextProvider = props => {

    const [dataChart, setDataChart] = useState(fulldata['2020'])
    const [yearData, setYearData] = useState("2020")

    const changeYear = (el) => {
        setYearData(el.target.value)
        setDataChart(fulldata[el.target.value])
    }

    return (
        <DasshContext.Provider value={{changeYear, dataChart, yearData}}>
            {props.children}
        </DasshContext.Provider>
    )

}
export default DasshContextProvider