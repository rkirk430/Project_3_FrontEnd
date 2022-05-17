import React from "react";
import data from "../data.json"
console.log(data);

const Price = (props) => {
    return(
        <h1> This is the Price History Page </h1>
     );
};

export default Price;
























// ====================================================================
//                      Using API
// ====================================================================

// import { useState, useEffect } from "react";
// import { useParams } from "react-router";

// const Price = (props) => {
//     //Start with our API Key
//     const apiKey = process.env.REACT_APP_API_KEY;
//     const params = useParams();
//     console.log(params);
//     const ticker = params.ticker;
//     console.log(ticker);

//     const url = `https://api.stockdata.org/v1/data/quote?symbols=${ticker}&api_token=${apiKey}`;

//     const [price, setPrice] = useState("null");

//     const getPrice = async () => {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         setPrice(data);
//     };

//     useEffect(() => {
//         getPrice();
//     }, []);

//     const loaded = () => {
//         return (
//             <div>
//                 <h1>Stock {price.data[0].ticker} </h1> 
//             </div>
//         );
//     }; 
// };

// export default Price;