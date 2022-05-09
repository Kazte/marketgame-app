import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";

const CartWidget = () => {
    const { getTotalQuantity } = useContext(cartContext);

    return (
        <Link to="/cart">
            <div className="cartWidget">
                <span className="material-icons icon--black">
                    shopping_cart<span className="cartWidget__number">{getTotalQuantity()}</span>
                </span>
            </div>
        </Link>
    );
};

export default CartWidget;
