import React from "react";
import governmentData from "../government.json";
console.log(governmentData); // Renders as Object with Arrays in console

const Government = () => {
    const allGovernmentData = governmentData[0].map((insiderTrades, idx) => {
        return (
            <p key = {idx}> {insiderTrades.representative}</p>
        )
    })
        return(
            <div className="government">
                {allGovernmentData}
            </div>
        )
}


// const Government = (props) => {
//     return <h1> This is the Gov't Insiders Trading Page </h1>
// };

export default Government;