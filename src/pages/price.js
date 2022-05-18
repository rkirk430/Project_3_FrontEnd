import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import stockData from "../data.json"
// console.log(stockData);

// ====================================================================
//                      Using API (Second Pass)
// ====================================================================

// const Price = () => {
//     //State to hold Ticker Symbol
//     const [tickers, setTickers] = useState([]);

//     //State to hold Pricing
// }

// ====================================================================
//                      Using API (First Pass)
// ====================================================================
    
    //ISSUES: 
        //Not pulling any data so console.log(params) is not returning anything. 

const Price = () => {
    //Start with our API Key
    const apiKey = process.env.REACT_APP_API_KEY;
    const params = useParams();
    console.log(params); //** DISPLAYS AN EMPTY OBJECT */
    const ticker = params.price.data.params;
    console.log(ticker);

    const url = `https://api.stockdata.org/v1/data/quote?symbols=${ticker}&api_token=${apiKey}`;

    const [price, setPrice] = useState("null");

    const getPrice = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setPrice(data);
    };

    useEffect(() => {
        getPrice();
    }, []);

    const loaded = () => {
        return (
            <div>
                <h1>Stock {price.data[0].ticker} </h1> 
            </div>
        );
    }; 

    const loading = () => {
        return <h1> Loading... </h1>
    };

    return price ? loaded() : loading();
};

export default Price;




//========================================================================
//                  Working Static Price 
//========================================================================
// const Price = () => {
//     const allStockData = stockData.data.map((price,idx) => {
//         console.log(idx);
//         return (
//             <p key = {idx}> {price.name} {price.ticker} ${price.price} </p>
//         )
//     })
//         return(
//         <div className="pricing">
//             {allStockData}
//         </div>
//     )
// }


// export default Price;
//Source Data: https://www.stockdata.org/;