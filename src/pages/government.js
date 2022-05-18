import React from "react";
import governmentData from "../government.json";
console.log(governmentData); // Renders as Object with Arrays in console

const Government = () => {
    const allGovernmentData = governmentData.map((insiderTrades, idx) => {
        return (
            <p key = {idx}> {insiderTrades.Representative} {insiderTrades.Date} {insiderTrades.Ticker} {insiderTrades.Transaction} ${insiderTrades.Amount} </p>
        )
    })
        return(
            <div className="government">
                <h1> This is the Gov't Insiders Trading Page </h1>
                {allGovernmentData}
            </div>
        )
}


// const Government = (props) => {
//     return <h1> This is the Gov't Insiders Trading Page </h1>
// };

export default Government;