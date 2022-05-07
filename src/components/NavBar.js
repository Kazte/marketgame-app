import CartWidget from "./CartWidget";

import { NavLink, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";

const NavBar = (props) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [checkBox, setCheckBox] = useState();

    const handleOpenMenu = (e) => {
        setCheckBox(e);
        setOpenMenu(e.target.checked);
    };

    const handleNavClick = () => {
        setOpenMenu(false);
        checkBox.target.checked = false;
    };

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
                <input onClick={handleOpenMenu} className="nav__checkbox" type="checkbox" id="nav-checkbox" />

                {!openMenu ? (
                    <label className="nav__checkbox_open" htmlFor="nav-checkbox">
                        <span className="material-icons ">menu</span>
                    </label>
                ) : (
                    <label className="nav__checkbox_close" htmlFor="nav-checkbox">
                        <span className="material-icons ">close</span>
                    </label>
                )}

                <div className="nav__menu">
                    <NavLink onClick={handleNavClick} className="nav__menu__link" to="/">
                        Home
                    </NavLink>

                    <NavLink onClick={handleNavClick} className="nav__menu__link" to="/categories">
                        Categories
                    </NavLink>

                    <NavLink onClick={handleNavClick} className="nav__menu__link" to="/myshopping">
                        Shopping
                    </NavLink>

                    <NavLink onClick={handleNavClick} className="nav__menu__link" to={"/user"}>
                        {props.name}
                    </NavLink>

                    <CartWidget onClick={handleNavClick} />

                    <SearchBar />
                </div>
            </nav>
        );
    }
};

export default NavBar;
