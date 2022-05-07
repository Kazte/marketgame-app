import { useContext } from "react";
import { cartContext } from "./CartContext";

const CartShop = () => {
    const { total_price } = useContext(cartContext);

    return (
        <div>
            <h1>Cart Shop</h1>
            <h2>Total Price: ${total_price}</h2>
        </div>
    );
};

export default CartShop;
