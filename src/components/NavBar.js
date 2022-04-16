import CartWidget from "./CartWidget";

const NavBar = (props) => {
    const menuList = ["Item 1", "Item 2", "Item 3"];

    let menuItems = [];

    menuList.forEach((item) => {
        menuItems.push(
            <a className="nav__link" href="#">
                {item}
            </a>
        );
    });

    if (props.footer) {
        return <nav className="nav">{menuItems}</nav>;
    } else {
        return (
            <nav className="nav">
                <a href="">{props.name}</a>
                {menuItems}
                <CartWidget />
            </nav>
        );
    }
};

export default NavBar;
