import { useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${item.id}`);
    };

    return (
        <div className="itemCard" onClick={handleClick}>
            <main className="itemCard__main">
                <div>
                    <img src={item.cover} alt="" />
                </div>
            </main>
            <footer className="itemCard__footer">
                <p className="itemCard__footer__price">${item.price}</p>
            </footer>
        </div>
    );
};

export default ItemCard;
