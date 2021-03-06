import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to = "/">
                <div>Home Page</div>
            </Link>
            <Link to = "/lastprice">
                <div>Last Price</div>
            </Link>
            <Link to = "/sentiment">
                <div>Sentiment Tracker</div>
            </Link>
            <Link to = "/government">
                <div>U.S. Representatives Trading Activity</div>
            </Link>
        </div>
    );
};

export default Nav;