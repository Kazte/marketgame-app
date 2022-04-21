import CartWidget from "./CartWidget";

const NavBar = (props) => {
    if (props.footer) {
        return (
            <nav className="nav">
                <a className="nav__link" href="#">
                    Item 1
                </a>
                <a className="nav__link" href="#">
                    Item 2
                </a>
                <a className="nav__link" href="#">
                    Item 3
                </a>
            </nav>
        );
    } else {
        return (
            <nav className="nav">
                <a href="">{props.name}</a>
                <a className="nav__link" href="#">
                    Item 1
                </a>
                <a className="nav__link" href="#">
                    Item 2
                </a>
                <a className="nav__link" href="#">
                    Item 3
                </a>
                <CartWidget />
            </nav>
        );
    }
};

export default NavBar;
