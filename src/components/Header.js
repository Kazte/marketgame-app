import { NavLink, Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">
                <Link className="nav__link" to="/">
                    Market Game
                </Link>
            </h1>
            <NavBar name="Franco" footer={false} />
        </header>
    );
};

export default Header;
