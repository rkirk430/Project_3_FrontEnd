import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to = "/">
                <div>Home Page</div>
            </Link>
            <Link to = "/price">
                <div>Pricing</div>
            </Link>
            <Link to = "/sentiment">
                <div>Sentiment Tracker</div>
            </Link>
            <Link to = "/valuation">
                <div>Valuations</div>
            </Link>
        </div>
    );
};

export default Nav;