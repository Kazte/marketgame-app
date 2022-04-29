import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <Link to="/cart">
            <div className="cartWidget">
                <span className="material-icons icon--black">
                    shopping_cart
                    <span className="cartWidget__number">3</span>
                </span>
            </div>
        </Link>
    );
};

export default CartWidget;
