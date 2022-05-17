import React from "react";
import sentimentData from "../sentiment.json";
console.log(sentimentData); // Renders Object Array from "sentiment.json"

const Sentiment = () => {
    const allSentimentData = sentimentData.results.map((sentiment,idx) => {
        // console.log(sentiment); // Gives me all of the obejcts within the Array
        return (
            <p key = {idx}> {sentiment.rank}. {sentiment.name} {sentiment.ticker} {sentiment.upvotes} </p>
        )
    })
        return(
            <div className="sentiment">
                {allSentimentData}
            </div>
        )
}



export default Sentiment;