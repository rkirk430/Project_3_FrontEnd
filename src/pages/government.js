import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Price from "./price";
import governmentData from "../government.json";
import {Table, TableProps} from "react-bootstrap";
// console.log(governmentData); // Renders as Object with Arrays in console

// ====================================================================
//                      Using API 
// ====================================================================

// const Government = () => {

//     //useState
//     const [tickers, setTickers] = useState([]);


//     const apiKey2 = process.env.REACT_APP_API_KEY2;
//     var url = "https://api.quiverquant.com/beta/historical/senatetrading/aapl";

//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url);

//     xhr.setRequestHeader("accept", "application/json");
//     xhr.setRequestHeader("X-CSRFToken", "TyTJwjuEC7VV7mOqZ622haRaaUr0x0Ng4nrwSRFKQs7vdoBcJlK9qjAS69ghzhFu");
//     xhr.setRequestHeader("Authorization", `${apiKey2}`);
//     const params = useParams();
//     // console.log(params); //Empty Object Showing in Console.
//     const ticker = params.ticker;
//     console.log(ticker); // Console showing as "undefined"

//     //Access Data from API
//     const getTickerSymbol = async () => {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         setTickers(data);
//     }

//     //useEffect
//     useEffect(() => {
//         getTickerSymbol();
//     }, []);

//     return tickers;

//  }
// export default Government;




// ====================================================================
//                      Static Data
// ====================================================================


const Government = () => {
    const allGovernmentData = governmentData.map((insiderTrades, idx) => {
        return (
            <p key = {idx} representative = {insiderTrades.Representative} date = {insiderTrades.Date} ticker = {insiderTrades.Ticker} transaction = {insiderTrades.Transaction} amount = {insiderTrades.Amount}/> 
        )
    })
        return(
            <div className="government">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Representative</th>
                            <th>Stock</th>
                            <th>Purchase or Sale</th>
                            <th>Amount Transacted ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>5/14/2022</td>
                            <td>Victoria Spartz</td>
                            <td>SPG</td>
                            <td>Purchase</td>
                            <td>$15,000</td>
                        </tr>
                        <tr>
                            <td>5/11/2022</td>
                            <td>Bob Gibbs</td>
                            <td>AAPL</td>
                            <td>Purchase</td>
                            <td>$1,000</td>
                        </tr>
                        <tr>
                            <td>4/25/2022</td>
                            <td>Virginia Foxx</td>
                            <td>PSX</td>
                            <td>Sale</td>
                            <td>$50,000</td>
                        </tr>
                    </tbody>
                </Table>
                <h1> This is the Gov't Insiders Trading Page </h1>
                {allGovernmentData}
            </div>
        )
}


export default Government;