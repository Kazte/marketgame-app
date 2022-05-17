import { useContext } from "react"
import { cartContext } from "./CartContext"
import ShopListContainer from "./ShopListContainer"

import { db } from "../Firebase"
import Button from "./Button"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const CartShop = () => {
    const { getTotalPrice, getTotalQuantity, clearCart } = useContext(cartContext)

    const navigate = useNavigate()

    const handleBackHome = () => {
        navigate("/")
    }

    const handleClearCart = () => {
        clearCart()
        toast(`Deleted all items in the cart!`)
    }

    return (
        <div className="cartShop">
            {getTotalQuantity() > 0 ? (
                <>
                    <h1>Cart Shop</h1>

                    <ShopListContainer />
                    <div className="cartShop__buttons">
                        <Button onClick={handleClearCart} text="Clear Cart" />
                        <h2>Total Price: ${getTotalPrice() || 0}</h2>
                        <Button text="Buy" />
                    </div>
                </>
            ) : (
                <>
                    <h2>It seems that there is nothing here, do you want to go back?</h2>
                    <Button text="Home" onClick={handleBackHome} />
                </>
            )}
        </div>
    )
}

export default CartShop
