import { collection, getDocs, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import ShoppingList from "./ShoppingList"
import { db } from "../Firebase"
import Button from "./Button"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./AuthContext"

const ShoppingListContainer = () => {
    const navigate = useNavigate()

    const auth = useAuth()

    const handleBackHome = () => {
        navigate("/")
    }

    const [items, setItems] = useState(null)

    useEffect(() => {
        if (!auth.user) return

        const ordersCollection = collection(db, "orders")

        const query = getDocs(ordersCollection, where("buyer_id", "==", auth.user.uid))

        query.then((res) => {
            const orders = res.docs.map((doc) => {
                let items = {
                    id: doc.id,
                    items: [...doc.data().items],
                }

                return items
            })

            let items = []

            orders.forEach((order) => {
                order.items.forEach((e) => {
                    items.push(e.item)
                })
            })

            setItems(items)
        })
    }, [auth.user])

    return (
        <>
            {auth.user ? (
                <>
                    {items ? (
                        <>
                            <ShoppingList items={items} />
                        </>
                    ) : (
                        <>
                            <h2>It seems that there is nothing here, do you want to go back?</h2>
                            <Button text="Home" onClick={handleBackHome} />
                        </>
                    )}{" "}
                </>
            ) : (
                <h1>You must Login First</h1>
            )}
        </>
    )
}

export default ShoppingListContainer
