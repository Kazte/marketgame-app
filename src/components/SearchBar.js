import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchText, setSearchText] = useState();
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.value !== "") {
            setSearchText(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Array.from(e.target).forEach((e) => (e.value = ""));
        navigate(`/search/${searchText}`);
    };

    return (
        <form onSubmit={handleSubmit} className="searchBar">
            <div className="searchBar__wrapper">
                <input className="searchBar__input" onChange={handleChange} type="text" placeholder="search..." />
                <Link to={`/search/${searchText}`} className="searchBar__button" type="button">
                    <span className="material-icons button">search</span>
                </Link>
            </div>
        </form>
    );
};

export default SearchBar;
