import { useContext } from "react";
import { cartContext } from "./CartContext";
import ShopList from "./ShopList";

const ShopListContainer = () => {
    const { cart } = useContext(cartContext);

    return <ShopList items={cart} />;
};

export default ShopListContainer;
