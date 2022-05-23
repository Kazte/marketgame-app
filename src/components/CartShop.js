import { useContext, useState } from "react"
import { cartContext } from "./CartContext"
import ShopListContainer from "./ShopListContainer"

import { db } from "../Firebase"
import Button from "./Button"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { addDoc, collection } from "firebase/firestore"

const CartShop = () => {
    const { getTotalPrice, getTotalQuantity, clearCart, cart } = useContext(cartContext)

    const [order, setOrder] = useState(null)

    const navigate = useNavigate()

    const handleBackHome = () => {
        navigate("/")
    }

    const handleClearCart = () => {
        clearCart()
        toast(`Deleted all items in the cart!`)
    }

    const handleBuy = () => {
        toast("Buy!")

        const ordersCollection = collection(db, "orders")

        var today = new Date()

        var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

        const order = {
            buyer: {
                name: "Franco",
                phone: "+541158974514",
                email: "pepeelcapo@gmail.com",
            },
            items: cart,
            date: date + " " + time,
            total: getTotalPrice(),
        }
        const query = addDoc(ordersCollection, order)

        query
            .then((res) => {
                clearCart()
                setOrder({ id: res.id, ...order })
            })
            .catch((err) => console.error(err))
    }

    return (
        <>
            {order != null ? (
                <div className="cartShop">
                    <h2>Your order ID: {order.id}</h2>
                    <Button text="Home" onClick={handleBackHome} />
                </div>
            ) : (
                <div className="cartShop">
                    {getTotalQuantity() > 0 ? (
                        <>
                            <h1>Cart Shop</h1>

                            <ShopListContainer />
                            <div className="cartShop__buttons">
                                <Button onClick={handleClearCart} text="Clear Cart" />
                                <h2>Total Price: ${getTotalPrice() || 0}</h2>
                                <Button onClick={handleBuy} text="Buy" />
                            </div>
                        </>
                    ) : (
                        <>
                            <h2>It seems that there is nothing here, do you want to go back?</h2>
                            <Button text="Home" onClick={handleBackHome} />
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default CartShop
