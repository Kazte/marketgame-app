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
                    Shopping
                </Link>
            </nav>
        );
    } else {
        return (
            <nav className="nav">
                <div className="nav__menu">
                    <NavLink className="nav__menu__link" to="/">
                        Home
                    </NavLink>

                    <NavLink className="nav__menu__link" to="/categories">
                        Categories
                    </NavLink>

                    <NavLink className="nav__menu__link" to="/myshopping">
                        Shopping
                    </NavLink>

                    <NavLink className="nav__menu__link" to={"/user"}>
                        {props.name}
                    </NavLink>

                    <CartWidget />

                    <SearchBar />
                </div>
            </nav>
        );
    }
};

export default NavBar;
