import { useContext } from "react"
import { cartContext } from "./CartContext"
import ShopListContainer from "./ShopListContainer"

import { db } from "../Firebase"
import Button from "./Button"
import { useNavigate } from "react-router-dom"

const CartShop = () => {
    const { getTotalPrice, getTotalQuantity } = useContext(cartContext)

    const navigate = useNavigate()

    const handleBackHome = () => {
        navigate("/")
    }

    return (
        <div className="cartShop">
            {getTotalQuantity() > 0 ? (
                <>
                    <h1>Cart Shop</h1>
                    <h2>Total Price: ${getTotalPrice() || 0}</h2>
                    <ShopListContainer />
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
