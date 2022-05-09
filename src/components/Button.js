const Button = ({ text, onClick }) => {
    return (
        <button className="customBtn button" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
