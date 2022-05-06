import CartWidget from "./CartWidget";

import { NavLink, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";

const NavBar = (props) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = (e) => {
        console.log(e.target.checked);
        setOpenMenu(e.target.checked);
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
                <SearchBar />

                <input onClick={handleOpenMenu} className="nav__checkbox" type="checkbox" id="nav-checkbox" />

                {!openMenu ? (
                    <label className="nav__checkbox_open" for="nav-checkbox">
                        <span class="material-icons ">menu</span>
                    </label>
                ) : (
                    <label className="nav__checkbox_close" for="nav-checkbox">
                        <span class="material-icons ">close</span>
                    </label>
                )}

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
                </div>
            </nav>
        );
    }
};

export default NavBar;
