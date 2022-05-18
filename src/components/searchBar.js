import React, {useState} from 'react';

const searchBar = () => {}

const [searchInput, setInput] = useState("");

const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
]

const handleChange = (props) => {
    props.preventDefault();
    setSearchInput(props.target.value);
};

if (searchInput.)

