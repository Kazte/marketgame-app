import CartWidget from "./CartWidget";

import { NavLink, Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = (props) => {
    if (props.footer) {
        return (
            <nav className="nav">
                <Link className="nav__link_basic" to="/">
                    Home
                </Link>
                <Link className="nav__link_basic" to="/categories">
                    Categories
                </Link>
                <Link className="nav__link_basic" to="/myshopping">
                    My Shopping
                </Link>
            </nav>
        );
    } else {
        return (
            <nav className="nav">
                <SearchBar />

                <NavLink className="nav__link" to="/">
                    Home
                </NavLink>
                <NavLink className="nav__link" to="/categories">
                    Categories
                </NavLink>
                <NavLink className="nav__link" to="/myshopping">
                    My Shopping
                </NavLink>
                <NavLink className="nav__link" to={"/user"}>
                    {props.name}
                </NavLink>
                <CartWidget />
            </nav>
        );
    }
};

export default NavBar;
