import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import sentimentData from "../sentiment.json";
import SearchBar from "../components/searchBar";
// console.log(sentimentData); // Renders Object Array from "sentiment.json"

const Sentiment = () => {

// --------------------useState----------------------------

    // State to hold Ticker Symbol
    const [tickers, setTickers] = useState([]);

    const url = "https://apewisdom.io/api/v1.0/filter/all-stocks/page/1";
    const params = useParams();
    // console.log(params);

    const getTicker = async () => {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
        setTickers(data);
    }
// =================================================================
            //  useEffects
// =============================================================

    useEffect (() => {
        getTicker();
    }, []);

    const loaded = () => {
        return (
            <div>
                <SearchBar/>
                <h1>Stock Sentiment </h1> 
            </div>
        );
    }; 

    const loading = () => {
        return <h1> Loading... </h1>
    };

    return tickers ? loaded() : loading();
}



export default Sentiment;


//Source Data: https://apewisdom.io/api/v1.0/filter/all-stocks/page/1


//=====================================================================
//                      Static Sentiment Data
//=====================================================================

// const Sentiment = () => {
//     const allSentimentData = sentimentData.results.map((sentiment,idx) => {
//         // console.log(sentiment); // Gives me all of the obejcts within the Array
//         return (
//             <p key = {idx}> {sentiment.rank}. {sentiment.name} {sentiment.ticker} {sentiment.upvotes} </p>
//         )
//     })
//         return(
//             <div className="sentiment">
//                 {allSentimentData}
//             </div>
//         )
// }

// export default Sentiment;

