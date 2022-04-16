import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">
                <a href="#">Market Game</a>
            </h1>
            <NavBar name="Franco" footer={false} />
        </header>
    );
};

export default Header;
