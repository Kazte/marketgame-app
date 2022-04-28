import { Link, useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemCard = ({ item }) => {
    const onAdd = (itemCount) => {
        console.log(itemCount);
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${item.id}`);
    };

    return (
        // <Link to={`/product/${item.id}`}>
        <div className="itemCard" onClick={handleClick}>
            {/* <header className="itemCard__header">
                    <h2>{item.name}</h2>
                </header> */}
            <main className="itemCard__main">
                <div>
                    <img src={item.cover} alt="" />
                </div>

                {/* <div>
                    <p className="itemCard__main__description">{item.description}</p>
                </div> */}
            </main>
            <footer className="itemCard__footer">
                <p className="itemCard__footer__price">${item.price}</p>
            </footer>
        </div>
        // </Link>
    );
};

export default ItemCard;
