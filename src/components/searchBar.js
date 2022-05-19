import React, {useState} from 'react'

const SearchBar = () => {
 const [searchInput, setSearchInput] = useState("");
    const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" },
    ];
    const handleChange = (props) => {
    props.preventDefault();
    setSearchInput(props.target.value);
    };
    if (searchInput.length > 0) {
        countries.filter((country) => {
        return country.name.match(searchInput);
    });
}
        return (
        <div>
            <input type="search" placeholder="Search here" onChange={handleChange} value={searchInput} />
            <table>
            <tr>
                <th>Country</th>
                <th>Continent</th>  
            </tr>
            {countries.map((country, index) => {
            <div>
            <tr>
                <td>{country.name}</td>
                <td>{country.continent}</td>
            </tr>
        </div>
    })}
    </table>
    </div>
    )};

export default SearchBar;


//Sourcecode Example: https://javascript.plainenglish.io/how-to-implement-a-search-bar-in-react-js-8cf8f5513b8e
