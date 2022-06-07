import CartWidget from "./CartWidget"

import { NavLink, Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import { useAuth } from "./AuthContext"

const NavBar = (props) => {
    const auth = useAuth()

    if (props.footer) {
        return (
            <nav className="nav">
                <Link className="nav__link_basic" to="/">
                    Home
                </Link>
                <Link className="nav__link_basic" to="/categories">
                    Categories
                </Link>
            </nav>
        )
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

                    {auth.user ? (
                        <>
                            <NavLink className="nav__menu__link" to="/myshopping">
                                Shopping
                            </NavLink>
                            <NavLink className="nav__menu__link" to={"/user"}>
                                Profile
                            </NavLink>
                            <CartWidget />
                        </>
                    ) : (
                        <>
                            <NavLink className="nav__menu__link" to="/login">
                                Log In
                            </NavLink>
                            <NavLink className="nav__menu__link" to="/register">
                                Register
                            </NavLink>
                        </>
                    )}

                    <SearchBar />
                </div>
            </nav>
        )
    }
}

export default NavBar
