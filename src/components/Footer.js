import NavBar from "./NavBar";

const Footer = () => {
    return (
        <footer className="footer">
            <em>Copyright ©</em>
            <NavBar footer={true} />
        </footer>
    );
};

export default Footer;
