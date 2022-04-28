import CartWidget from "./CartWidget";

import { NavLink, Link } from "react-router-dom";

const NavBar = (props) => {
    if (props.footer) {
        return (
            <nav className="nav">
                <Link className="nav__link" to="/">
                    Home
                </Link>
                <Link className="nav__link" to="/categories">
                    Categories
                </Link>
                <Link className="nav__link" to="/myshopping">
                    My Shopping
                </Link>
            </nav>
        );
    } else {
        return (
            <nav className="nav">
                <NavLink to={`/${props.name}`}>{props.name}</NavLink>
                <NavLink className="nav__link" to="/">
                    Home
                </NavLink>
                <NavLink className="nav__link" to="/categories">
                    Categories
                </NavLink>
                <NavLink className="nav__link" to="/myshopping">
                    My Shopping
                </NavLink>
                <CartWidget />
            </nav>
        );
    }
};

export default NavBar;
