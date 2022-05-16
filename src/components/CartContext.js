import { useState, createContext } from "react"

export const cartContext = createContext()

const { Provider } = cartContext

const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (product, quantity) => {
        if (isInCart(product.id)) {
            const newCart = [...cart]

            for (const element of newCart) {
                if (element.item.id == product.id) {
                    element.quantity += quantity
                }
            }

            setCart(newCart)
        } else {
            setCart([...cart, { item: product, quantity: quantity }])
        }
    }

    const removeItem = (id) => {
        if (isInCart(id)) {
            let newCart = [...cart]
            const index = newCart.findIndex((i) => i.item.id === id)

            newCart.splice(index, 1)
            setCart(newCart)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find((e) => e.item.id == id)
    }

    const getTotalPrice = () => {
        let total = 0

        for (const e of cart) {
            total += e.item.price * e.quantity
        }

        return total
    }

    const getTotalQuantity = () => {
        let total = 0

        if (cart.length <= 0) return 0

        for (const e of cart) {
            total += e.quantity
        }

        return total
    }

    return <Provider value={{ cart, getTotalPrice, getTotalQuantity, addItem, removeItem, clearCart }}>{children}</Provider>
}

export default CustomProvider
