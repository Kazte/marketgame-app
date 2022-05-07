import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";

const CartWidget = () => {
    const { total } = useContext(cartContext);

    return (
        <Link to="/cart">
            <div className="cartWidget">
                <span className="material-icons icon--black">
                    shopping_cart
                    {total > 0 ? <span className="cartWidget__number">{total}</span> : <></>}
                </span>
            </div>
        </Link>
    );
};

export default CartWidget;
