import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
    const [searchText, setSearchText] = useState("");

    const handleChange = (e) => {
        // if (e.target.value !== "") {
        //     setSearchText(e.target.value);
        // }
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
    };

    const handleLeave = (e) => {
        // console.log(e);
    };

    return (
        <form onMouseLeave={handleLeave} onSubmit={handleSubmit} className="searchBar">
            <div className="searchBar__wrapper">
                <input className="searchBar__input" onChange={handleChange} type="text" placeholder="search..." />
                <button className="searchBar__button" type="submit">
                    <span className="material-icons button">search</span>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
