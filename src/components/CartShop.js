import { useContext } from "react"
import { cartContext } from "./CartContext"
import ShopListContainer from "./ShopListContainer"

import { db } from "../Firebase"

const CartShop = () => {
    const { getTotalPrice } = useContext(cartContext)

    return (
        <div>
            <h1>Cart Shop</h1>
            <h2>Total Price: ${getTotalPrice() || 0}</h2>
            <ShopListContainer />
        </div>
    )
}

export default CartShop
